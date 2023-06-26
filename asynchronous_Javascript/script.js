// Exercise 1
// For this exercise we're going to use VSCode's live-server extension, which allows us to have a running backend in a few seconds.

// Create a new directory (= folder), containing 3 files:

// index.html
// script.js
// becode.json
// Create a <button>, when clicked becode rules are loaded with a fetch('becode.json'), 
// then dynamically generate a <ul> list containing each rule in a <li>.


const button = document.createElement("button");
button.style.width = "100px";
button.style.height = "50px";
button.textContent = "Becode rules";
button.addEventListener("click", displayBeCode);

function displayBeCode() {
  fetch("./becode.json")
    .then((response) => response.json())
    .then((data) => {
      const list = document.createElement("ul");

      data.forEach((line) => {
        const listItem = document.createElement("li");
        listItem.textContent = line;
        list.appendChild(listItem);
        button.removeEventListener("click", displayBeCode);
        document.body.appendChild(listItem);
      });
    });
}
document.body.appendChild(button);
console.log(button);
