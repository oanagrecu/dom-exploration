// 1.Add a keyup listener on the first input field, so that once you type a letter in this field,
// it goes into the <span id="display-firstname">.
// The content of the field and the span should always remain the same.
const firstInput = document.querySelector("#firstname");
const display1 = document.querySelector("#display-firstname");
firstInput.addEventListener("keyup", function () {
  display1.innerHTML = firstInput.value;
});
// 2.Add a keyup listener on the second input (the number input),
// so that if the age is below 18 the content of the section a-hard-truth remains hidden,
// otherwise show them this hard to swallow fact.

const secondInput = document.querySelector("#age");
const display2 = document.querySelector("#a-hard-truth");
// console.log(secondInput);
secondInput.addEventListener("keyup", function () {
  if (secondInput.value > 18) {
    display2.style.visibility = "visible";
  } else {
    display2.style.visibility = "hidden";
  }
});

// 3.Add a keyup listener on both fields and show a visual hint (for instance turn the field red)
// if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
//
const firstPassword = document.querySelector("#pwd");
const confirmationPassword = document.querySelector("#pwd-confirm");

function checkPassword() {
  var goodColor = "#66cc66";
  var badColor = "#ff6666";

  if (
    firstPassword.value === confirmationPassword.value &&
    firstPassword.value.length > 5
  ) {
    firstPassword.style.backgroundColor = goodColor;
    confirmationPassword.style.backgroundColor = goodColor;
  } else {
    firstPassword.style.backgroundColor = badColor;
    confirmationPassword.style.backgroundColor = badColor;
  }
}
firstPassword.addEventListener("keyup", checkPassword);
confirmationPassword.addEventListener("keyup", checkPassword);

// 4.use a change listener on the <select> field to toggle a dark mode on the whole page.
// For ease of use, we'll say that the dark mode is just turning the background black and the text white.
const darkModeSelect = document.querySelector("#toggle-darkmode");

darkModeSelect.addEventListener("change", function () {
  if (darkModeSelect.value === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
