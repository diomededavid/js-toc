// Import stylesheets
import './style.css';

var tableOfContents = function (options) {


  let defaults = {
    selector: 'h2',
    target: '#toc',
    addLinks: true,
    heading: 'Table of Contents'
  }

  let headings, toc, settings;

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

  var createTOC = function () {
    let tocItems = Array.prototype.map.call(headings, function (heading) {
      if (settings.addLinks) {
        return `<li><a href="#${getID(heading)}">${heading.textContent}</a></li>`;
      }
      return `<li>${heading.textContent}</li>`;


    });

    if (toc && tocItems.length > 0) {
      toc.innerHTML = `<h2>${settings.heading}</h2>
      <ul> ${tocItems.join('')}</ul>`
    };
  }

  //
  // Intits an Event Listeners
  //

  // Merge user options into defaults
  settings = Object.assign({}, defaults, options);

  // Get all of the headings
  let headings = document.querySelectorAll(settings.selector);
  let toc = document.querySelector(settings.target);


  // Create the table of Contentss
  createTOC();
}



tableOfContents({
  heading: 'Contents',
  selector: 'h3',
  target: '#contents',
  addLinks: false,
});