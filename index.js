// Import stylesheets
import './style.css';

var tableOfContents = function () {
  // Get all of the headings
  let headings = document.querySelectorAll('h2');
  let toc = document.querySelector('#toc');

  /**
   * Get the heading ID (or create one if it doesn't have one)
   * @param  {Node}   elem The element
   * @return {String}      The ID
   */

  let getID = function (elem) {
    // If the element doesn't have an ID create one
    if (!elem.id) {
      elem.id = elem.textContent.replace(new RegExp('', 'g'), '-')
    }
    return elem.id;
  }

  let tocItems = Array.prototype.map.call(headings, function (heading) {
    return `<li><a href="#${getID(heading)}">${heading.textContent}</a></li>`;
  });

  if (toc && tocItems.length > 0) {
    toc.innerHTML = `<h2>Table of Contents</h2>
  <ul> ${tocItems.join('')}</ul>`
  };
}

tableOfContents();