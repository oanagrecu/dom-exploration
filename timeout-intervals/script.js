

// The setTimeout function allows you to execute a function in the future. This function takes two arguments:
// The function to execute
// The time, in milliseconds (thousandths of a second), the timer should wait before the specified function or code is executed.

// console.log("WARNING! In exactly five seconds something will explode");

function theExplosion() {
  console.log("BOOM!");
}

setTimeout(theExplosion, 5000);

// You can also combine timeout and events, the only limit is your imagination.
// function theExplosion() {
//     console.log("BOOM!");
//   }
  
//   const button = document.createElement("button");
//   button.textContent = "WARNING";
//   button.addEventListener("click", () => {
//     // this will delay the event by 5 seconds
//     setTimeout(theExplosion, 5000);
//   });
//   document.body.appendChild(button);


//   You can use RECURSION(a function that calls itself) to create repetitive delays.
//   let times = 0;
// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;

//   const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
//   setTimeout(heyYou, nextCall);
// }
// the function above writen using setInterval
// let times = 0;
// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;
// }

// setInterval(heyYou, 1000);

// let interval;
// let times = 0;

// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;
// }

// buttonThreeSeconds = document.createElement("button");
// buttonThreeSeconds.textContent = "say hey every 3 seconds";
// buttonThreeSeconds.addEventListener("click", () => {
//   interval = setInterval(heyYou, 3000);
// });

// buttonStop = document.createElement("button");
// buttonStop.textContent = "Stop saying hey";
// buttonStop.addEventListener("click", () => {
//   // We must first check if there is an interval
//   if (interval != undefined) {
//     clearInterval(interval);
//   }
// });

// document.body.appendChild(buttonThreeSeconds);
// document.body.appendChild(buttonStop);

// Using setInterval display the word prout one character at a time (one letter per second). 
// Once the word is written on the screen clear the interval.

//alternative1
let word = ["p", "r", "o", "u", "t"];
let givenWord = document.getElementById("givenWord");

let index = 0;
function displayTheWord() {
  givenWord.innerHTML += word[index];
  index++;
  if (index >= word.length) {
    clearInterval(intervalNew);
  }
}

let intervalNew = setInterval(displayTheWord, 1000);

//alternative2

// function printTheWord(word, speed){
//     var i = 0;
//     var interval = setInterval(function(){
//         document.getElementById("givenWord").innerHTML += word.charAt(i);
//         i++;
//         if (i > word.length){
//             clearInterval(interval);
//         }
//     }, speed);
// }

// printTheWord( "prout", 1000);

// let writtenWord = document.getElementById("displayedWord");
// document.addEventListener('keydown', (event) => {
//     let arr = [];
//     const name = event.key;
//         arr.push(name);
// for(let i = 0; i < arr.length; i++){
//     writtenWord.innerHTML += `${name}`;
// }});


// EXERCICE 2
// Write a function that displays every second that has passed on the page since it was opened. 
// The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed",
//  then "2 minutes have passed" (for 120 seconds and more), etc.


// function updateTimeDisplay() {
//     var seconds = Math.floor((new Date() - startTime) / 1000);
//     var displayText;

//     if (seconds < 60) {
//       displayText = seconds + " second" + (seconds === 1 ? "" : "s");
//     } else {
//       var minutes = Math.floor(seconds / 60);
//       displayText = minutes + " minute and " + (minutes === 1 ? "" : "s") +" have passed";
//     }
//     document.getElementById("timer").innerHTML = displayText;
//   }
//   var startTime = new Date();

//  let interval2 =  setInterval(updateTimeDisplay, 1000);
//  clearInterval(interval2);


function displaySecondsPassed() {
    var seconds = 0;
    var displayElement = document.createElement("p");
    document.body.appendChild(displayElement);

    var interval = setInterval(function() {
      seconds++;
      var minutes = Math.floor(seconds / 60);
      var secondsRemaining = seconds % 60;

      if (minutes > 0) {
        if (secondsRemaining === 0) {
          displayElement.textContent = minutes + " minute(s) have passed";
        } else {
          displayElement.textContent = minutes + " minute(s) and " + secondsRemaining + " second(s) have passed";
        }
      } else {
        displayElement.textContent = seconds + " second(s) have passed";
      }
    }, 1000);
  

  setTimeout(function() {
    clearInterval(interval);
    displayElement.textContent = "Interval stopped";
  }, 100000); // Stop the interval after 5 seconds
}
  displaySecondsPassed();
  