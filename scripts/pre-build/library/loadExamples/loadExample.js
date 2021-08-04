const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
const { handleElement, getContent } = require("./handleElement");

const loadExample = async (filePath, { exampleRelativeDirectory }) => {
  const html = await fs.readFile(filePath, { encoding: "utf8" });
  const slug = path.basename(filePath).slice(0, -5);

  const root = parseHtml(html);

  walkHtmlElements(root, handleElement);

  const { title, head, body } = getContent();

  return {
    fileName: `${slug}.md`,
    fileContent: getTemplateBoilerplate({
      title,
      permalink: `/examples/${exampleRelativeDirectory}/${slug}`,
      head: head.innerHTML,
      content: body.innerHTML,
    }),
  };
};

module.exports = loadExample;
