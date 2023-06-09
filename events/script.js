const _initTime = Date.now();
const containerForNewSquares = document.querySelector(
  ".displayedsquare-wrapper"
);
const listOfDetails = document.querySelector("ul");

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

// Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
// Create a new <li> in the log below to state when the action was done

const clickOnSquare = (e) => {
  // console.log(e.target.classList[1]);
  // console.log(e.target.classList);
  // console.log(getElapsedTime());
  const newSquare = document.createElement("div");
  containerForNewSquares.appendChild(newSquare);
  newSquare.classList.add(e.target.classList[1], e.target.classList[0]);

  // adding an alert when clicking on the created squares

  newSquare.addEventListener("click", function () {
    alert(`Clicked on the ${e.target.classList[1]} square`);
  });
  // adding log information when creating the squares
  const newListItem = document.createElement("li");
  newListItem.className = "collection-item";
  newListItem.innerHTML = `${getElapsedTime()} Created a new ${
    e.target.classList[1]
  } square`;
  listOfDetails.appendChild(newListItem);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// When the spacebar is hit randomly change the background color of the whole page

function changingBackgroundColor(e) {
  if (e.key === " ") {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}
document.body.addEventListener("keydown", changingBackgroundColor);

//  deletes item from the log one at a time
// document.addEventListener("keydown", function (event) {
//   if (event.key === "l") {
//     const listItems = document.querySelectorAll(".collection-item");
//     const lastListItem = listItems[listItems.length - 1];
//     lastListItem.remove();
//   }
// });

// Log when the spacebar is used the same way you used for the generated squares.

const handleSpacebarPress = (event) => {
  if (event.key === " ") {
    const newListItem = document.createElement("li");
    newListItem.className = "collection-item";
    newListItem.innerHTML = `${getElapsedTime()} Spacebar was pressed and the color has changed${
      event.key
    }`;
    listOfDetails.appendChild(newListItem);
    console.log(newListItem);
  }
};
document.addEventListener("keydown", handleSpacebarPress);
// When the l key is pressed the log gets deleted (erases the generated <li>s).

document.addEventListener("keydown", function (event) {
  if (event.key === "l") {
    const listItems = document.querySelectorAll(".collection-item");
    listItems.forEach(function (item) {
      item.remove();
    });
  }
});
// When the s key is pressed the squares get deleted (erases the generated squares)
document.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    containerForNewSquares.innerHTML = "";
  }
});
