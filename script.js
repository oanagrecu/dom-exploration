let title = document.getElementsByTagName("title")[0].innerHTML;
console.log(title);
let newTitle = document.getElementsByTagName.innerHTML = "Modifying the DOM";
console.log(newTitle);

window.addEventListener('load', () => {
    document.body.style.backgroundColor = '#FF69B4';

  const colors = ["red", "orange", "yellow", "green", "blue","rebeccapurple","violet"];
  document.body.style.background = colors[Math.floor(7*Math.random())];

});
const list = document.body.childNodes;
let text = "";
for (let x of list ){
  console.log(x);
}
