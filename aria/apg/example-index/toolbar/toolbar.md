---
# This is a generated file
title: "Toolbar Example"
ref: /aria/apg/example-index/toolbar/toolbar

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/toolbar/toolbar.html
feedbackmail: public-aria-practices@w3.org
permalink: /aria/apg/example-index/toolbar/toolbar

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/18'>View issues related to this example</a></p>            <p>Page last updated: May 17, 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
  integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
  crossorigin="anonymous"
/>
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/toolbar.css" rel="stylesheet" />
<link href="css/menuButton.css" rel="stylesheet" />

<script src="js/FormatToolbarItem.js" type="text/javascript"></script>
<script src="js/FormatToolbar.js" type="text/javascript"></script>
<script src="js/FontMenuItem.js" type="text/javascript"></script>
<script src="js/FontMenu.js" type="text/javascript"></script>
<script src="js/FontMenuButton.js" type="text/javascript"></script>
<script src="js/SpinButton.js" type="text/javascript"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/aria/apg/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>

            <h2>About This Example</h2>
            <details id="support-notice" class="note">
    <summary>Important Note About Use of This Example</summary>
    <p>
        Note: This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="{{ '/aria/apg/practices/read-me-first/#browser_and_AT_support' | relative_url }}">browser and assistive technology combinations</a>,
        especially for <a href="{{ '/aria/apg/practices/read-me-first/#mobile_and_touch_support' | relative_url }}">mobile/touch devices</a>.
        Testing code based on this example with assistive technologies is essential before considering use in production systems.
    </li>
    <li>
        The <a href="https://aria-at.w3.org">ARIA and Assistive Technologies Project</a>
        is developing measurements of assistive technology support for APG examples.
    </li>
    <li>
        Robust accessibility can be further optimized by choosing implementation patterns that
        <a href="https://www.w3.org/TR/using-aria/#rule1">maximize use of semantic HTML</a>
        and heeding the warning that
        <a href="{{ '/aria/apg/practices/read-me-first/#no_aria_better_bad_aria' | relative_url }}">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
          <img alt=""
          src="{{ '/content-images/wai-aria-practices/img/toolbar.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
  <div>
  
  <p>
    The following example of an editor toolbar implements the
    <a href="{{ '/aria/apg/patterns/toolbar/' | relative_url }}">design pattern for toolbar</a>
    and demonstrates how a toolbar can group a set of interactive widgets into a single tab stop.
    For illustrative and interoperability assessment purposes, this implementation includes a diverse set of widgets, some of which may not be ordinarily grouped in the same toolbar.
    For instance, it includes both a checkbox and toggle buttons. In a typical implementation, the design would use either one or the other but not both.
    Similarly, the edit field is included to help simulate actual implementation and is not intended to represent an actual rich text editor.
    This example also illustrates the <a href="{{ '/aria/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex method</a> for managing focus within a component.
  </p>
  <section>
    <div class="example-header">
      <h2 id="ex_label">Example</h2>
    </div>
    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
    <div id="ex1">
      <div class="format" role="toolbar" aria-label="Text Formatting" aria-controls="textarea1">
          <div class="group characteristics">
            <button type="button"
                class="item bold popup"
                aria-pressed="false"
                value="bold"
                tabindex="0">
              <span class="fas fa-bold" aria-hidden="true"></span>
              <span class="popup-label">Bold</span>
            </button>
            <button type="button"
                class="item italic popup"
                aria-pressed="false"
                value="italic"
                tabindex="-1">
              <span class="fas fa-italic" aria-hidden="true"></span>
              <span class="popup-label">Italic</span>
            </button>
            <button type="button"
                class="item underline popup"
                aria-pressed="false"
                value="underline"
                tabindex="-1">
              <span class="fas fa-underline" aria-hidden="true"></span>
              <span class="popup-label">Underline</span>
            </button>
          </div>
          <div class="group"
               role="radiogroup"
               aria-label="Text Alignment">
            <button type="button"
                role="radio"
                class="item align-left popup"
                aria-checked="true"
                tabindex="-1">
              <span class="fas fa-align-left" aria-hidden="true"></span>
              <span class="popup-label">Text Align Left</span>
            </button>
            <button type="button"
                role="radio"
                class="item align-center popup"
                aria-checked="false"
                tabindex="-1">
              <span class="fas fa-align-center" aria-hidden="true"></span>
              <span class="popup-label">Text Align Center</span>
            </button>
            <button type="button"
                role="radio"
                class="item align-right popup"
                aria-checked="false"
                tabindex="-1">
              <span class="fas fa-align-right" aria-hidden="true"></span>
              <span class="popup-label">Text Align Right</span>
            </button>
          </div>
          <div class="group">
            <button type="button"
                class="item copy"
                aria-disabled="true"
                tabindex="-1">
              Copy
            </button>
            <button type="button"
                class="item paste"
                aria-disabled="true"
                tabindex="-1">
                Paste
            </button>
            <button type="button"
                class="item cut"
                aria-disabled="true"
                tabindex="-1">
                Cut
            </button>
          </div>
          <div class="menu-popup group">
            <button type="button"
              aria-haspopup="true"
              aria-controls="menu1"
              class="item menu-button"
              tabindex="-1"
              aria-label="Font: Sans-serif"
              style="text-align: left; width: 140px; font-family: sans-serif">
              SANS-SERIF
              <span></span>
            </button>
            <ul role="menu" id="menu1" aria-label="Font Family">
              <li role="menuitemradio" aria-checked="true" style="font-family: sans-serif">Sans-serif</li>
              <li role="menuitemradio" aria-checked="false" style="font-family: serif">Serif</li>
              <li role="menuitemradio" aria-checked="false" style="font-family: monospace">Monospace</li>
              <li role="menuitemradio" aria-checked="false" style="font-family: fantasy">Fantasy</li>
              <li role="menuitemradio" aria-checked="false" style="font-family: cursive">Cursive</li>
            </ul>
          </div>

          <div class="group">
            <div class="item spinbutton"
                  role="spinbutton"
                  tabindex="-1"
                  aria-valuenow="14"
                  aria-valuetext="14pt"
                  aria-valuemin="8"
                  aria-valuemax="40"
                  aria-label="Font size in points">
              <span class="value">14pt</span>
              <span class="increase">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <polygon class="increase" fill="#333" points="0,12 11,12 6,2"></polygon>
                </svg>
              </span>
              <span class="decrease">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <polygon class="decrease" fill="#333" points="0,2 11,2 6,12"></polygon>
                </svg>
              </span>
            </div>
          </div>

          <div class="group">
            <label class="input"><input id="checkbox" class="item nightmode" type="checkbox" tabindex="-1"> Night Mode</label>
            <a id="link" class="item link" href="help.html" tabindex="-1">Help</a>
          </div>
      </div>
      <label for="textarea1" class="hidden">Text Sample</label><br>
      <textarea id="textarea1" rows="20" cols="80"
        style="font-family: sans-serif">
Abraham Lincoln's Gettysburg Address

Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation, so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow, this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us, that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion, that we here highly resolve that these dead shall not have died in vain, that this nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not perish from the earth.
</textarea>
    </div>
    <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
  </section>

  <section>
    <h2>Accessibility Features</h2>
    <h3>Keyboard Features</h3>
    <ul>
      <li>
        When tabbing into the toolbar, focus returns to the control that last had focus.
        Focus movement inside the toolbar is managed using <a href="{{ '/aria/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex</a>.
    </li>
      <li>
        When any of the cut, copy and paste buttons are disabled they remain focusable to ensure screen reader users are aware of their presence.
        For additional guidance, see <a href="{{ '/aria/apg/practices/keyboard-interface/#kbd_disabled_controls' | relative_url }}">Focusability of disabled controls.</a>
      </li>
      <li><kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd> navigate among elements in the toolbar so <kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd> are available to:
        <ul>
          <li>Navigate among radios in the text alignment group. For instance, <kbd>Down Arrow</kbd> moves focus from last to first member in the group.</li>
          <li>Open the font menu button, which can also be opened with <kbd>Enter</kbd>.</li>
          <li>Increase and decrease the font size spin button.</li>
        </ul>
      </li>
    </ul>
    <h3>Focus Styling</h3>
    <ul>
      <li>
        When the toolbar has focus, the container element border is highlighted,
        helping indicate that the container supports directional navigation with the arrow keys.
      </li>
      <li>
        When a toolbar item has focus, its border is highlighted and the background color of the button also changes.
      </li>
    </ul>
    <h3>Button Popup Labels</h3>
    <p>The bold, italic, underline, and text align buttons have popup labels that implement the requirements of <a href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">WCAG Success Criterion 1.4.13 Content on Hover or Focus</a>:</p>
    <ul>
      <li>When a bold, italic, underline, or text align button receives focus or mouse hover, a popup appears above the button revealing its text label.</li>
      <li>The popup label remains visible when the pointer hovers over the label content.</li>
      <li>Pressing <kbd>Esc</kbd> hides the popup label .</li>
    </ul>
  </section>

  <section>
    <h2 id="kbd_label">Keyboard Support</h2>
    <section>
      <h3 id="kbd_label_1">Toolbar</h3>
      <p>The toolbar provides the following keyboard support described in the <a href="{{ '/aria/apg/patterns/toolbar/' | relative_url }}">toolbar pattern.</a></p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_1 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-tab">
            <th><kbd>Tab</kbd></th>
            <td>
              <ul>
                <li>Moves focus into and out of the toolbar.</li>
                <li>The first control is focused if the toolbar is receiving focus for the first time after page load.</li>
                <li>Otherwise, the most recently focused control receives focus.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-right-arrow">
            <th><kbd>Right Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the next control.</li>
                <li>If the last control has focus, focus moves to the first control.</li>
                <li>If an item in the popup menu has focus, does nothing.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-left-arrow">
            <th><kbd>Left Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the previous control.</li>
                <li>If the first control has focus, focus moves to the last control.</li>
                <li>If an item in the popup menu has focus, does nothing.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-home">
            <th><kbd>Home</kbd></th>
            <td>Moves focus to the first control.</td>
          </tr>
          <tr data-test-id="toolbar-end">
            <th><kbd>End</kbd></th>
            <td>Moves focus to the last control.</td>
          </tr>
          <tr data-test-id="toolbar-toggle-esc">
            <th><kbd>ESC</kbd></th>
            <td>If a button popup label is visible, hides it.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_2">Toggle Buttons (Bold, Italic, Underline)</h3>
      <p>The toggle buttons for choosing to apply <b>Bold</b>, <i>Italic</i>, and <u>Underline</u> styling provide the following keyboard support described in the <a href="{{ '/aria/apg/patterns/button/' | relative_url }}">button design pattern</a>.</p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_2 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-toggle-enter-or-space">
            <th><kbd>Enter</kbd><br><kbd>Space</kbd></th>
            <td>Toggle the pressed state of the button.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_3">Radio Group (Text Alignment)</h3>
      <p>
        The buttons for choosing left, center, or right text alignment are styled like toggle buttons.
        However, since pressing one toggles off another so that only one button in the group is in the pressed state, the toggles behave like radio buttons.
        Because ARIA is designed to inform assistive technologies about UI semantics and behaviors, not styling,
        the alignment toggles provide the following keyboard support described in the <a href="{{ '/aria/apg/patterns/radiobutton/' | relative_url }}">radio group design pattern.</a>
        As described in the pattern, nesting a radio group in a toolbar calls for an important behavioral difference compared to radios outside a toolbar: moving focus inside the group does not automatically change which button is checked.
        In addition, because <kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd> are needed by the parent toolbar, they are not captured by the radio group.
        The toolbar thus provides navigation into, inside, and out of the nested radio group.
      </p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_3 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-radio-enter-or-space">
            <th><kbd>Enter</kbd><br><kbd>Space</kbd></th>
            <td>
              <ul>
                <li>If the focused radio button is checked, do nothing.</li>
                <li>Otherwise, uncheck the currently checked radio button and check the radio button that has focus.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-radio-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the next radio button.</li>
                <li>If the last radio button has focus, focus moves to the first radio button.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-radio-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the previous radio button.</li>
                <li>If the radio button has focus, focus moves to the last radio button.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_4">Button (Cut, Copy, Paste)</h3>
      <p>
        The buttons for cut, copy, and paste provide the following keyboard support described in the <a href="{{ '/aria/apg/patterns/button/' | relative_url }}">button design pattern.</a>
        While they are HTML button elements, as described in the accessibility features section above, in order to remain focusable when disabled, they have <code>aria-disabled</code> instead of the HTML <code>disabled</code> attribute.
      </p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_4 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-button-enter-or-space">
            <th><kbd>Enter</kbd><br><kbd>Space</kbd></th>
            <td>If the button is enabled, execute the action associated with the button. Otherwise, do nothing.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_5">Menu Button (Font Family)</h3>
      <p>The menu button for opening the font family menu provides the following keyboard support described in the <a href="{{ '/aria/apg/patterns/menubutton/' | relative_url }}">menu button design pattern.</a></p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_5 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-menubutton-enter-or-space-or-down-or-up">
            <th>
              <kbd>Enter</kbd><br>
              <kbd>Space</kbd><br>
              <kbd>Down Arrow</kbd><br>
              <kbd>Up Arrow</kbd>
            </th>
            <td>
              Open the menu and place focus on a menu item.
              In this implementation, the focus is set on the currently selected font family when the menu opens.
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_6">Menu (Font Family)</h3>
      <p>The menu for choosing a font family provides the following keyboard support described in the <a href="{{ '/aria/apg/patterns/menu/' | relative_url }}">Menu design pattern.</a></p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_6 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-menu-enter-or-space">
            <th><kbd>Enter</kbd><br><kbd>Space</kbd></th>
            <td>Activate the menu item, close the menu, and place focus on the menu button.</td>
          </tr>
          <tr data-test-id="toolbar-menu-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the next menu item.</li>
                <li>If the last menu item has focus, focus moves to the first menu item.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-menu-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the previous menu item.</li>
                <li>If the first menu item has focus, focus moves to the last menu item.</li>
              </ul>
            </td>
          </tr>
        <tr data-test-id="toolbar-menu-escape">
          <th><kbd>ESC</kbd></th>
          <td>Closes the menu and moves focus to the menu button.</td>
        </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_7">Spin Button (Font Size)</h3>
      <p>The spin button for changing font size provides the following keyboard support described in the <a href="{{ '/aria/apg/patterns/spinbutton/' | relative_url }}">spin button design pattern.</a></p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_7 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-spinbutton-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>Decreases the font size of the text in the <code>textarea</code> by 1 point.</td>
          </tr>
          <tr data-test-id="toolbar-spinbutton-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>Increases the font size of the text in the <code>textarea</code> by 1 point.</td>
          </tr>
          <tr data-test-id="toolbar-spinbutton-page-down">
            <th><kbd>Page Down</kbd></th>
            <td>Decreases the font size of the text in the <code>textarea</code> by 5 points.</td>
          </tr>
          <tr data-test-id="toolbar-spinbutton-page-up">
            <th><kbd>Page Up</kbd></th>
            <td>Increases the font size of the text in the <code>textarea</code> by 5 points.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_8">Checkbox (Night Mode)</h3>
      <p>
        The checkbox for toggling night mode provides the following keyboard support defined in the <a href="{{ '/aria/apg/patterns/checkbox/' | relative_url }}">checkbox design pattern.</a>
        As an HTML input element, the browser provides the keyboard support.
        </p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_8 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="test-not-required">
            <th><kbd>Space</kbd></th>
            <td>Toggles the state of the checkbox.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_9">Link (Help)</h3>
      <p>
        The link for opening a help page provides the following keyboard support described in the <a href="{{ '/aria/apg/patterns/link/' | relative_url }}">link design pattern.</a>
        As an HTML link, the keyboard support is provided by the browser.
      </p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_9 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="test-not-required">
            <th><kbd>Enter</kbd><br><kbd>Space</kbd></th>
            <td>Activate the link.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

  </section>

  <section>
    <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
    <section>
      <h3 id="rps_label_1">Toolbar</h3>
      <p>The toolbar implements the following ARIA attributes described in the <a href="{{ '/aria/apg/patterns/toolbar/' | relative_url }}">toolbar pattern.</a></p>
      <div class="table-wrap"><table aria-labelledby="rps_label_1 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-role">
            <th scope="row"><code>toolbar</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Indicates the container is a <code>toolbar</code>.</li>
                <li>The toolbar div is not focusable because focus is managed with a <a href="{{ '/aria/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex</a>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-aria-label">
            <td></td>
            <th scope="row">
              <code>aria-label="Text Formatting"</code>
            </th>
            <td><code>div</code></td>
            <td>Provides the toolbar with an accessible name of &quot;Text Formatting&quot;.</td>
          </tr>
          <tr data-test-id="toolbar-aria-controls">
            <td></td>
            <th scope="row">
              <code>aria-controls="IDREF"</code>
            </th>
            <td><code>div</code></td>
            <td>Set to a value that references the text area, indicating the toolbar controls the text area.</td>
          </tr>
          <tr data-test-id="toolbar-item-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="-1"</code>
            </th>
            <td>
              <code>button</code>, <code>div</code>, <code>input[type="checkbox"]</code>, <code>a</code>
            </td>
            <td>
              <ul>
                <li>Makes the toolbar item focusable but not part of the page <kbd>Tab</kbd> sequence.</li>
                <li>Applied to all toolbar items contained in the toolbar except for one that is included in the page <kbd>Tab</kbd> sequence.</li>
                <li>This approach to managing focus is described in the section on <a href="{{ '/aria/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex</a>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-item-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="0"</code>
            </th>
            <td>
              <code>button</code>, <code>div</code>, <code>input[type="checkbox"]</code>, <code>a</code>
            </td>
            <td>
              <ul>
                <li>Makes the toolbar item part of the page <kbd>Tab</kbd> sequence.</li>
                <li>Set on only one item contained in the toolbar.</li>
                <li>On page load, set on the first item in the toolbar.</li>
                <li>Moves with focus inside the toolbar so the most recently focused item is included in the page <kbd>Tab</kbd> sequence.</li>
                <li>This approach to managing focus is described in the section on <a href="{{ '/aria/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex</a>.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_2">Toggle Buttons (Bold, Italic, Underline)</h3>
      <p>The toggle buttons for choosing to apply <b>Bold</b>, <i>Italic</i>, and <u>Underline</u> styling implement the following ARIA attributes described in the <a href="{{ '/aria/apg/patterns/button/' | relative_url }}">button design pattern</a>.</p>
      <div class="table-wrap"><table aria-labelledby="rps_label_2 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-button-aria-pressed">
            <td></td>
            <th scope="row"><code>aria-pressed="true"</code></th>
            <td><code>button</code></td>
            <td>Indicates the button is a toggle and that the styling controlled by the button has been applied.</td>
          </tr>
          <tr data-test-id="toolbar-button-aria-pressed">
            <td></td>
            <th scope="row"><code>aria-pressed=<q>false</q></code></th>
            <td><code>button</code></td>
            <td>Indicates the button is a toggle and that the styling controlled by the button has <strong>NOT</strong> been applied.</td>
          </tr>
          <tr data-test-id="toolbar-aria-hidden">
            <td></td>
            <th scope="row"><code>aria-hidden="true"</code></th>
            <td><code>span</code></td>
            <td>Hides the icon character from being included in the accessible name.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_3">Radio Group (Text Alignment)</h3>
      <p>
        The buttons for choosing left, center, or right text alignment are styled like toggle buttons.
        However, since pressing one toggles off another so that only one button in the group is in the pressed state, the toggles behave like radio buttons.
        Because ARIA is designed to inform assistive technologies about UI semantics and behavior, not styling,
        the alignment toggles implement the following ARIA attributes described in the <a href="{{ '/aria/apg/patterns/radiobutton/' | relative_url }}">radio group design pattern.</a>
      </p>
      <div class="table-wrap"><table aria-labelledby="rps_label_3 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-radiogroup-role">
            <th scope="row"><code>radiogroup</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>Identifies the <code>div</code> element as a container for group of radio buttons.</td>
          </tr>
          <tr data-test-id="toolbar-radiogroup-aria-label">
            <td></td>
            <th scope="row"><code>aria-label="Text Alignment"</code></th>
            <td><code>div</code></td>
            <td>Defines the accessible name for the group of radio buttons as &quot;Text Alignment&quot;.</td>
          </tr>
          <tr data-test-id="toolbar-radio-role">
            <th scope="row"><code>radio</code></th>
            <td></td>
            <td><code>button</code></td>
            <td>
              <ul>
                <li>Identifies the <code>button</code> element  as a <code>radio</code> button.</li>
                <li>The accessible name comes from the child text content of the <code>button</code> element.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-radio-aria-checked">
            <td></td>
            <th scope="row"><code>aria-checked="true"</code></th>
            <td><code>button</code></td>
            <td>
              <ul>
                <li>Indicates the radio button is checked, i.e., the type of alignment currently applied to the text area.</li>
                <li>Only one radio button in the group has <code>aria-checked</code> set to <code>true</code> at any given time.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-radio-aria-checked">
            <td></td>
            <th scope="row"><code>aria-checked="false"</code></th>
            <td><code>button</code></td>
            <td>
              <ul>
                <li>Indicates the radio button is <strong>NOT</strong> checked.</li>
                <li>All radio buttons in the group, except for one,  have <code>aria-checked</code> set to <code>false</code>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-aria-hidden">
            <td></td>
            <th scope="row"><code>aria-hidden="true"</code></th>
            <td><code>span</code></td>
            <td>Hides the icon character from being included in the accessible name.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_4">Button (Cut, Copy, Paste)</h3>
      <p>
        The buttons for cut, copy, and paste implement the following ARIA attributes         described in the <a href="{{ '/aria/apg/patterns/button/' | relative_url }}">button design pattern.</a>
        While they are HTML button elements, as described in the accessibility features section above, in order to remain focusable when disabled, they have <code>aria-disabled</code> instead of the HTML <code>disabled</code> attribute.
      </p>
      <div class="table-wrap"><table aria-labelledby="rps_label_4 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-button-aria-disabled">
            <td></td>
            <th scope="row"><code>aria-disabled="true"</code></th>
            <td><code>button</code></td>
            <td>Set when the button is disable to inform assistive technologies of the disabled state.</td>
          </tr>
          <tr data-test-id="toolbar-button-aria-disabled">
            <td></td>
            <th scope="row"><code>aria-disabled="false"</code></th>
            <td><code>button</code></td>
            <td>Set when the function provided by the button is available.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_5">Menu Button (Font Family)</h3>
      <p>The menu button for opening the font family menu implements the following ARIA attributes described in the <a href="{{ '/aria/apg/patterns/menubutton/' | relative_url }}">menu button design pattern.</a></p>
      <div class="table-wrap"><table aria-labelledby="rps_label_5 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-menubutton-aria-label">
            <td></td>
            <th scope="row"><code>aria-label="Font: FONT_FAMILY_NAME"</code></th>
            <td><code>button</code></td>
            <td>
              <ul>
                <li>Defines the accessible name for the menu button by concatenating <q>Font: </q> with the name of the font family currently checked in the menu.</li>
                <li>Updated when a different font family is chosen in the font family menu.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-menubutton-aria-haspopup">
            <td></td>
            <th scope="row"><code>aria-haspopup="true"</code></th>
            <td><code>button</code></td>
            <td>
              <ul>
                <li>Indicates the <code>button</code> opens a menu.</li>
                <li>
                  <strong>NOTE:</strong> While ARIA does not include a <code>menubutton</code>, most platform accessibility APIs have a <code>menubutton</code> role.
                  On those platforms, assistive technologies identify buttons with <code>aria-haspopup</code> set to either <code>true</code> or <code>menu</code> as menu buttons.
                </li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-menubutton-aria-controls">
            <td></td>
            <th scope="row"><code>aria-controls="IDREF"</code></th>
            <td><code>button</code></td>
            <td>
              <ul>
                <li>Set to a value that references the element with role <code>menu</code>.</li>
                <li>Indicates the button opens and closes the menu.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-menubutton-aria-expanded">
              <td></td>
              <th scope="row"><code>aria-expanded="true"</code></th>
              <td><code>button</code></td>
              <td>
                <ul>
                  <li>Added when the menu is open.</li>
                  <li>Indicates that the menu is displayed and that activating the menu button closes the menu.</li>
                  <li>The <code>aria-expanded</code> attribute is removed when the menu is closed.</li>
                  <li>Included to support touch devices where screen reader users can touch the menu button when the menu is displayed. Keyboard users cannot focus the menu button when the menu is open.</li>
                </ul>
              </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_6">Menu (Font Family)</h3>
      <p>The menu for choosing a font family implements the following ARIA attributes described in the <a href="{{ '/aria/apg/patterns/menu/' | relative_url }}">Menu design pattern.</a></p>
      <div class="table-wrap"><table aria-labelledby="rps_label_6 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-menu-role">
            <th scope="row">
              <code>menu</code>
            </th>
            <td></td>
            <td><code>ul</code></td>
            <td>Identifies the <code>ul</code> element as a <code>menu</code>.</td>
          </tr>
          <tr data-test-id="toolbar-menu-aria-label">
            <td></td>
            <th scope="row"><code>aria-label="Font Family"</code></th>
            <td><code>ul</code></td>
            <td>Defines the accessible name for the menu as &quot;Font Family&quot;.</td>
          </tr>
          <tr data-test-id="toolbar-menuitemradio-role">
            <th scope="row"><code>menuitemradio</code></th>
            <td></td>
            <td><code>li</code></td>
            <td>
              <ul>
                <li>Identifies the <code>li</code> element as a <code>menuitemradio</code>.</li>
                <li>The text content of the <code>li</code> element provides the accessible name of the <code>menuitemradio</code>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-menuitemradio-aria-checked">
            <td>
            </td>
            <th scope="row"><code>aria-checked="true"</code></th>
            <td><code>li</code></td>
            <td>
              <ul>
                <li>Applied to an element with role <code>menuitemradio</code> to indicate the item is checked, informing users which font is applied to the text area .</li>
                <li>Only one item in the menu has the checked state at any given time.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-menuitemradio-aria-checked">
            <td>
            </td>
            <th scope="row"><code>aria-checked="false"</code></th>
            <td><code>li</code></td>
            <td>
              <ul>
                <li>Applied to elements with role <code>menuitemradio</code> to indicate the items are <strong>NOT</strong> checked.</li>
                <li>All items in the menu, except one, have this value.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-menuitemradio-tabindex">
            <td></td>
            <th scope="row"><code>tabindex="-1"</code></th>
            <td>
              <code>li</code>
            </td>
            <td>
              <ul>
                <li>Makes the <code>menuitemradio</code> element focusable so DOM focus can be set on the menu item.</li>
                <li>Dynamically added by JavaScript.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_7">Spin Button (Font Size)</h3>
      <p>The spin button for changing font size implements the following ARIA attributes described in the <a href="{{ '/aria/apg/patterns/spinbutton/' | relative_url }}">spin button design pattern.</a></p>
      <div class="table-wrap"><table aria-labelledby="rps_label_7 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="toolbar-spinbutton-role">
            <th scope="row"><code>spinbutton</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>Identifies the <code>div</code> element as a <code>spinbutton</code>.</td>
          </tr>
          <tr data-test-id="toolbar-spinbutton-aria-label">
            <td></td>
            <th scope="row"><code>aria-label="Font size in points"</code></th>
            <td><code>div</code></td>
            <td>Defines the accessible name for the spin button as &quot;Font size in points&quot;.</td>
          </tr>
          <tr data-test-id="toolbar-spinbutton-aria-valuenow">
            <td></td>
            <th scope="row"><code>aria-valuenow="NUMBER_POINTS"</code></th>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Indicates the current value of the spin button.</li>
                <li>Updated by JavaScript as users adjust the value of the spin button.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-spinbutton-aria-valuetext">
            <td></td>
            <th scope="row"><code>aria-valuetext="NUMBER_POINTS Points"</code></th>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Provides a more user friendly announcement of the current value for screen reader users.</li>
                <li><code>NUMBER_POINTS</code> is updated by JavaScript as the user adjusts the value of the spin button.</li>
                <li>As users adjust the value, instead of hearing only a number, they will hear the current value followed by the word <q>Points</q>, e.g., <q>10 Points</q>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="toolbar-spinbutton-aria-valuemin">
            <td></td>
            <th scope="row"><code>aria-valuemin="8"</code></th>
            <td><code>div</code></td>
            <td>Indicates the minimum allowed value for the spin button, i.e., smallest supported font size.</td>
          </tr>
          <tr data-test-id="toolbar-spinbutton-aria-valuemax">
            <td></td>
            <th scope="row"><code>aria-valuemax="40"</code></th>
            <td><code>div</code></td>
            <td>Indicates the maximum allowed value for the spin button, i.e., largest supported font size.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

  </section>

  <section>
    <h2>Javascript and CSS Source Code</h2>
    <ul id="css_js_files">
      <li>CSS: <a href="css/toolbar.css" type="text/css">toolbar.css</a></li>
      <li>CSS: <a href="css/menuButton.css" type="text/css">menuButton.css</a></li>
      <li>Javascript: <a href="js/FormatToolbar.js" type="text/javascript">FormatToolbar.js</a></li>
      <li>Javascript: <a href="js/FormatToolbarItem.js" type="text/javascript">FormatToolbarItem.js</a></li>
      <li>Javascript: <a href="js/FontMenuButton.js" type="text/javascript">FontMenuButton.js</a></li>
      <li>Javascript: <a href="js/FontMenu.js" type="text/javascript">FontMenu.js</a></li>
      <li>Javascript: <a href="js/FontMenuItem.js" type="text/javascript">FontMenuItem.js</a></li>
      <li>Javascript: <a href="js/SpinButton.js" type="text/javascript">SpinButton.js</a></li>
    </ul>
  </section>

  <section>
    <h2 id="sc1_label">HTML Source Code</h2>
    <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of HTML for "></div>
    <pre><code id="sc1"></code></pre>
    <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of HTML for "></div>
    
    <script>
      sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
      sourceCode.make();
    </script>
  </section>
  </div>
  

</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script 
  src="{{ '/content-assets/wai-aria-practices/skipto.min.js' | relative_url }}"
></script>