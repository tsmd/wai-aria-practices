---
# This file was generated by scripts/pre-build/library/formatForJekyll.js
title: "Practices"
ref: /ARIA/apg/practices/

github:
  repository: w3c/aria-practices
  branch: main
  path: content/practices/practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/practices/

sidebar: false



# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/apg/shared/css/github.css' | relative_url }}"
>


<script>
    const parentPage = window.location.pathname.match(
      /\/(patterns|practices)\//
    )?.[1];
    if (parentPage) {
      const parentHref = 'a[href*="' + parentPage + '"]';
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>

    {% include read-this-first.html %}
    <ul class="tiles">
      
            <li class="tile tile-landmark-regions">
              <a 
                href="{{ '/ARIA/apg/practices/landmark-regions/' | relative_url }}"
              >
                <h2 class="tile-name">
                  <span>Landmark Regions</span>
                </h2>
              </a>
              <div class="tile-introduction">
          ARIA landmark roles provide a powerful way to identify the organization and structure of a web page.</div>
            </li>
           
            <li class="tile tile-names-and-descriptions">
              <a 
                href="{{ '/ARIA/apg/practices/names-and-descriptions/' | relative_url }}"
              >
                <h2 class="tile-name">
                  <span>Providing Accessible Names and Descriptions</span>
                </h2>
              </a>
              <div class="tile-introduction">
          Providing elements with accessible names, and where appropriate, accessible descriptions, is one of the most important responsibilities authors have when developing accessible web experiences.</div>
            </li>
           
            <li class="tile tile-keyboard-interface">
              <a 
                href="{{ '/ARIA/apg/practices/keyboard-interface/' | relative_url }}"
              >
                <h2 class="tile-name">
                  <span>Developing a Keyboard Interface</span>
                </h2>
              </a>
              <div class="tile-introduction">
          Unlike native HTML form elements, browsers do not provide keyboard support for graphical user interface (GUI) components that are made accessible with ARIA; authors have to provide the keyboard support in their code.</div>
            </li>
           
            <li class="tile tile-grid-and-table-properties">
              <a 
                href="{{ '/ARIA/apg/practices/grid-and-table-properties/' | relative_url }}"
              >
                <h2 class="tile-name">
                  <span>Grid and Table Properties</span>
                </h2>
              </a>
              <div class="tile-introduction">
          To fully present and describe a grid or table, in addition to parsing the headers, rows, and cells using the roles described in the grid pattern or table pattern, assistive technologies need to be able to determine other structural and presentation characteristics, such as the number and visibility of rows and columns.</div>
            </li>
           
            <li class="tile tile-range-related-properties">
              <a 
                href="{{ '/ARIA/apg/practices/range-related-properties/' | relative_url }}"
              >
                <h2 class="tile-name">
                  <span>Communicating Value and Limits for Range Widgets</span>
                </h2>
              </a>
              <div class="tile-introduction">ARIA defines the following roles as range widgets, which means they communicate a value that is typically numeric and constrained to defined limits.</div>
            </li>
           
            <li class="tile tile-structural-roles">
              <a 
                href="{{ '/ARIA/apg/practices/structural-roles/' | relative_url }}"
              >
                <h2 class="tile-name">
                  <span>Structural Roles</span>
                </h2>
              </a>
              <div class="tile-introduction">
          ARIA provides a set of roles that convey the accessibility semantics of structures on a page.</div>
            </li>
           
            <li class="tile tile-hiding-semantics">
              <a 
                href="{{ '/ARIA/apg/practices/hiding-semantics/' | relative_url }}"
              >
                <h2 class="tile-name">
                  <span>Hiding Semantics with the <code>presentation</code> Role</span>
                </h2>
              </a>
              <div class="tile-introduction">
          While ARIA is primarily used to express semantics, there are some situations where hiding an element’s semantics from assistive technologies is helpful.</div>
            </li>
          
    </ul>
  
</div>
<script 
  src="{{ '/ARIA/apg/shared/js/skipto.js' | relative_url }}"
></script>