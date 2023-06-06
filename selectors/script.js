var importantItems = document.querySelectorAll(".important");
console.log(importantItems);
for (let item of importantItems) {
  item.setAttribute("title", "This is an important item.");
  console.log(item);
}

var images = document.querySelectorAll("img");

for (let image of images) {
  let value = image.getAttribute("class");
  if (value !== "important") {
    image.style.display = "none";
  }
}
var paragraphsElts = document.querySelectorAll("p");
const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
};

for (paragraph of paragraphsElts) {
  let className = paragraph.getAttribute("class");
  if (className !== null) {
    console.log(className);
    console.log(paragraph.innerText);
  } else {
    paragraph.style.color = randomRgbColor();
    console.log(paragraph.innerText);
  }
}
