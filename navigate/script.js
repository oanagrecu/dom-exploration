// Modify the script.js, do not create any new nodes!

// TASK 1 - Select the last child of the <ol> tag and put it at the beginning of the list

const orderedList = document.querySelector("ol");
// Get the last child of the <ol> element
var lastChild = orderedList.lastElementChild;
// Move the last child to the beginning of the list
orderedList.insertBefore(lastChild, orderedList.firstChild);

// TASK 2 - Move the <h2> of the third section in the second one and vice-versa
var secondSection = document.querySelectorAll("section")[1];
var thirdSection = document.querySelectorAll("section")[2];

var secondSectionHeading = secondSection.querySelector("h2");
var thirdSectionHeading = thirdSection.querySelector("h2");
secondSection.appendChild(thirdSectionHeading);
thirdSection.appendChild(secondSectionHeading);

//TASK 3 - Delete the last section from the DOM, we don't need it anyways
var lastSection = document.querySelector("section:last-of-type");
// lastSection.parentNode.removeChild(lastSection);

// var thirdSection = document.querySelectorAll("section")[2];
// console.log(thirdSection);
// thirdSection.remove();

let sections = document.querySelectorAll("section")[2];
sections.removeChild(sections.lastElementChild);
// let child = sections.length - 1;
// console.log(child);
