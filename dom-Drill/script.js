// Use childNodes to list all the children from the <ul>

const listItems = document.querySelector("ul").childNodes;
console.log(listItems);

//

// Write a for loop to iterate over every child. In this loop:
// Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
NodeList.prototype.forEach = Array.prototype.forEach;
listItems.forEach(function (item) {
  if (item.nodeType === 1) {
    console.log(item); //displays the elements nodes like : p, div, li
  }
});

//the code under displays the text nodes
// NodeList.prototype.forEach = Array.prototype.forEach
// listItems.forEach(function(item){
//      if(item.nodeType === 3){
//         var child = listItems.nodeValue;
//          console.log(child);
//     }
// });

// Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
const list = document.getElementsByTagName("li");
var fastAndFuriousElement = null;

for (let i = 0; i < list.length; i++) {
  if (list[i].textContent === "Fast and Furious") {
    fastAndFuriousElement = list[i];
    break;
  }
}

// Move the element to the top of the list
if (fastAndFuriousElement !== null) {
  fastAndFuriousElement.classList.add("important"); // Since Fast and Furious is the most important franchise ever, add a class .important to the element
  var firstElement = list[0];
  var parentElement = firstElement.parentNode;

  parentElement.insertBefore(fastAndFuriousElement, firstElement);
}
// Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element
for (let i = 0; i < list.length; i++) {
  let itemName = list[i].textContent;
  list[i].addEventListener("click", function () {
    if (itemName === "Fast and Furious") {
      alert(
        "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
      );
    } else {
      alert(itemName);
    }
  });
}
// (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
for (let i = 0; i < list.length - 1; i++) {
  var currentItem = list[i];
  for (let j = i + 1; j < list.length; j++) {
    var nextItem = list[j];
    if (currentItem.isEqualNode(nextItem)) {
      parentElement.removeChild(nextItem);
      console.log(nextItem);
    }
  }
}
// (*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order,
// however Fast and Furious should remain the first element (most important franchise ever, remember?)

document.body.addEventListener("keyup", function (e) {
  if (e.key === "r") {
    var randomOrder = Array.from(list).sort(function () {
      return Math.random() - 0.5;
    });

    // Reorder the list
    for (var i = 0; i < randomOrder.length; i++) {
      parentElement.appendChild(randomOrder[i]);
    }

    // Move the Fast and Furious element back to the top
    parentElement.insertBefore(fastAndFuriousElement, parentElement.firstChild);
  } else if (event.key === "d") {
    var clonedElement = fastAndFuriousElement.cloneNode(true);
    parentElement.appendChild(clonedElement);
  }
});
// (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned

// Create a new <div> before the list, using createElement and insertBefore

let newDiv = document.createElement("div");
newDiv.textContent = "New div before the list";

let container = parentElement.parentNode;
container.insertBefore(newDiv, parentElement);

// Using createElement, create a <select> tag into the previously created <div>,
// with two <option>s in it: "important franchises" and "normal franchises";

const select = document.createElement("select");
const option1 = document.createElement("option");
option1.textContent = "Important franchises";
const option2 = document.createElement("option");
option2.textContent = "Normal franchises";
newDiv.appendChild(select);
select.appendChild(option1);
select.appendChild(option2);

// Add an eventListener to the <select>, on change, if the option "important franchise" is chosen,
// only display items of the list that have the class .important. (hint: you can toggle visibility
// using element.style.visibility = 'hidden')

const items = document.querySelectorAll("ul li");
select.addEventListener("change", function () {
  const selectedOption = select.options[select.selectedIndex].textContent;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (selectedOption === "Important franchises") {
      if (item.classList.contains("important")) {
        item.style.visibility = "visible";
      } else {
        item.style.visibility = "hidden";
      }
    } else {
      item.style.visibility = "visible";
    }
  }
});
// const listItem = document.querySelectorAll("ul li");
// console.log(listItem);
// select.addEventListener("change", function (event) {
//   const selectedOption = select.options[select.selectedIndex].textContent;
//   console.log(selectedOption);
//   if (selectedOption === "Important franchise") {
//     // Display only items with class .important

//     listItem.forEach(function (item) {
//       if (item.classList.contains("important")) {
//         item.style.visibility = "visible";
//       } else {
//         item.style.visibility = "hidden";
//       }
//     });
//   } else {
//     // Display all items
//     listItem.forEach(function (item) {
//       item.style.visibility = "visible";
//     });
//   }
// });
