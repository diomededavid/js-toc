// Import stylesheets
import './style.css';

// Get all of the headings
let headings = document.querySelectorAll('h2');
let toc = document.querySelector('#toc');

/**
 * Get the heading ID (or create one if it doesn't have one)
 * @param  {Node}   elem The element
 * @return {String}      The ID
 */

let getID = function(elem) {
  // If the element doesn't have an ID create one
  if(!elem.id) {
    elem.id = elem.id = textContent.replace(new RegExp('', g))
  }
}