---
# This is a generated file
title: "Switch Example Using HTML Checkbox Input"
ref: /aria/apg/example-index/switch/switch-checkbox

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/switch/switch-checkbox.html
feedbackmail: public-aria-practices@w3.org
permalink: /aria/apg/example-index/switch/switch-checkbox

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/2'>View issues related to this example</a></p>            <p>Page last updated: May 17, 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/switch-checkbox.css" rel="stylesheet" />
<script src="js/switch-checkbox.js"></script>


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
          src="{{ '/content-images/wai-aria-practices/img/switch.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
  <div>
    
    <p>
      This example illustrates implementing the <a href="{{ '/aria/apg/patterns/switch/' | relative_url }}">Switch design pattern</a> with  an HTML <code>input[type="checkbox"]</code> as the switch element and  using CSS borders to provide graphical rendering of switch states.
      It also demonstrates using the HTML <code>fieldset</code> and <code>legend</code> elements to present multiple switches in a labeled group.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="switch.html">Switch Example</a>: A switch based on a <code>div</code> element that turns a notification preference on and off.</li>
      <li><a href="switch-button.html">Switch Example Using HTML Button</a>: A group of 2 switches based on HTML <code>button</code> elements that turn lights on and off.</li>
    </ul>

    <section>
      <div class="example-header">
        <h2 id="ex_label">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <fieldset>
          <legend>Accessibility Preferences</legend>
          <label>
            <span class="label">Reduced motion</span>
            <input id="id-switch-1"
            type="checkbox"
            role="switch">
            <span class="state">
              <span class="container">
                <span class="position">
                </span>
              </span>
              <span class="on" aria-hidden="true">On</span>
              <span class="off" aria-hidden="true">Off</span>
            </span>
          </label>
  
          <label>
            <span class="label">Show captions</span>
            <input id="id-switch-2"
            type="checkbox"
            role="switch">
            <span class="state">
              <span class="container">
                <span class="position">
                </span>
              </span>
              <span class="on" aria-hidden="true">On</span>
              <span class="off" aria-hidden="true">Off</span>
            </span>
          </label>
        </fieldset>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2>Accessibility Features</h2>
      <ul>
        <li>
          To help assistive technology users understand that each switch belongs to a set of switches related to <q>Accessibility Preferences</q>, the switches are wrapped in a <code>fieldset</code> element labeled with a <code>legend</code> element.
        </li>
        <li>
          To make understanding the state of the switch easier for users with visual or cognitive disabilities, a text equivalent of the state (<q>on</q> or <q>off</q>) is displayed adjacent to the graphical state indicator.
          CSS attribute selectors ensure the label displayed is synchronized with the value of the <code>input</code>.<br>
          <strong>NOTE:</strong> To prevent redundant announcement of the state by screen readers, the text indicators of state are hidden from assistive technologies with <code>aria-hidden</code>.
        </li>
        <li>Spacing, border widths and fill are important to ensure the graphical states are visible and discernible to people with visual impairments, including when browser or operating system high contrast settings are enabled:
          <ul>
            <li>To make  the graphical representation of the state of a switch readily perceivable, two pixel borders are used for the switch state container and a solid color is used for the fill of the circles indicating the on and off states.</li>
            <li>To ensure users can perceive the difference between the container and the circles used to indicate the state of the switch, there are two pixels of space between the container border and the circles.</li>
          </ul>
        </li>
        <li>To enhance perceivability  when operating the switches, visual keyboard focus and hover are styled using  the CSS <code>:hover</code> pseudo-class and <code>onfocus</code> and <code>onblur</code> event handlers:
          <ul>
            <li>To make it easier to perceive focus and the relationship between a label and its associated switch, focus creates a border around both the switch and the label and also changes the background color.</li>
            <li>To make it easier to perceive that clicking either the label or switch will activate the switch, the hover indicator is the same as the focus indicator.</li>
            <li>To help people with visual impairments identify the switch as an interactive element, the cursor is changed to a pointer when hovering over the switch.</li>
            <li>
              Note: Because transparent borders are visible on some systems with operating system high contrast settings enabled, transparency cannot be used to create a visual difference between the element that is focused an other elements.
              Instead of using transparency, the focused element has a thicker border and less padding.
              When an element receives focus, its border changes from zero to two pixels and padding is reduced by two pixels.
              When an element loses focus, its border changes from two pixels to two and padding is increased by two pixels.
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="kbd_label">Keyboard Support</h2>
      <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
        <tr data-test-id="key-tab">
          <th><kbd>Tab</kbd></th>
          <td>Moves keyboard focus to the <code>switch</code>.</td>
        </tr>
        <tr data-test-id="key-space">
            <th><kbd>Space</kbd></th>
            <td>Toggles the state of the switch between on and off.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
      <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
            <tr data-test-id="switch-role">
              <th scope="row"><code>switch</code></th>
              <td></td>
              <td><code>input[type="checkbox"]</code></td>
              <td>
                <ul>
                  <li>Identifies the element as an ARIA <code>switch</code>.</li>
                  <li>The accessible name is defined using the <code>label</code> element.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="aria-hidden">
              <td></td>
              <th scope="row"><code>aria-hidden="true"</code></th>
              <td><code>span.on</code> and <code>span.off</code></td>
              <td>
                <ul>
                  <li>Removes the strings <q>on</q> and <q>off</q> that appear to the right of the switch from the accessible name of the switch.</li>
                  <li>These strings are included only for enhancing visual comprehension of the state; element states are not permitted in accessible names.</li>
                </ul>
              </td>
            </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2>Javascript and CSS Source Code</h2>
      <ul id="css_js_files">
        <li>
          CSS:
          <a href="css/switch-checkbox.css" type="tex/css">switch-checkbox.css</a>
        </li>
        <li>
          Javascript:
          <a href="js/switch-checkbox.js" type="text/javascript">switch-checkbox.js</a>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="sc1_label">HTML Source Code</h2>
      <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
      <pre><code id="sc1"></code></pre>
      <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
      
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