function randomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
function shuffleLearners(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let randomIndex = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
const learners = [
  { name: "Learner 1", backgroundColor: randomRgbColor() },
  { name: "Learner 2", backgroundColor: randomRgbColor() },
  { name: "Learner 3", backgroundColor: randomRgbColor() },
  { name: "Learner 4", backgroundColor: randomRgbColor() },
  { name: "Learner 5", backgroundColor: randomRgbColor() },
  { name: "Learner 6", backgroundColor: randomRgbColor() },
  { name: "Learner 7", backgroundColor: randomRgbColor() },
  { name: "Learner 8", backgroundColor: randomRgbColor() },
  { name: "Learner 9", backgroundColor: randomRgbColor() },
];
shuffleLearners(learners);

const article = document.querySelector("article");
for (const learner of learners) {
  const newSection = document.createElement("section");
  newSection.style.backgroundColor = learner.backgroundColor;
  newSection.style.height = "50px";
  newSection.style.marginTop = "20px";
  // newSection.style.color = getContrastColor(learner.backgroundColor);

  const newParagraph = document.createElement("p");
  newParagraph.textContent = learner.name;
  newParagraph.style.paddingTop = "10px";
  newParagraph.style.textAlign = "center";

  newSection.appendChild(newParagraph);
  article.appendChild(newSection);

  // add the newly created element and its content into the DOM
}
let footer = document.getElementsByTagName("footer")[0];
document.body.insertBefore(newSection, footer);
