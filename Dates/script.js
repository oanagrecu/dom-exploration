// for Anchorage usa
// function updateTime() {
//     const anchorageTime = new Date().toLocaleString('en-US', { timeZone: 'America/Anchorage' });
//     document.getElementById('anchorage').textContent = anchorageTime;
//     const brusselsTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Brussels' });
//     document.getElementById('brussels').textContent = brusselsTime;
//   }
//   setInterval(updateTime, 1000);

// for Reykjavik

//   function updateTime2() {
//     const reykjavikTime = new Date().toLocaleString('en-US', { timeZone: 'Atlantic/Reykjavik' });
//     document.getElementById('reykjavik').textContent = reykjavikTime;

//     const brusselsTime2 = new Date().toLocaleString('en-US', { timeZone: 'Europe/Brussels' });
//     document.getElementById('brussels2').textContent = brusselsTime2;
//   }
//   setInterval(updateTime2, 1000);
// for St Peterrsburg
//   function updateTime3() {
//     const stPetersburgTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
//     document.getElementById('stPetersburg').textContent = stPetersburgTime;
//     const brusselsTime3 = new Date().toLocaleString('en-US', { timeZone: 'Europe/Brussels' });
//     document.getElementById('brussels3').textContent = brusselsTime3;
//   }
//   setInterval(updateTime3, 1000);
// Exercise 1 Find the timezones of:  as a single function

function updateTime(timeZone, cityElementId, brusselsElementId) {
  const cityTime = new Date().toLocaleString("en-US", { timeZone: timeZone });
  document.getElementById(cityElementId).textContent = cityTime;

  const brusselsTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Brussels",
  });
  document.getElementById(brusselsElementId).textContent = brusselsTime;
}
// Update time every second for Anchorage
setInterval(function () {
  updateTime("America/Anchorage", "anchorage", "brussels");
}, 1000);
// Update time every second for Reykjavik
setInterval(function () {
  updateTime("Atlantic/Reykjavik", "reykjavik", "brussels2");
}, 1000);
// Update time every second for Saint Petersburg
setInterval(function () {
  updateTime("Europe/Moscow", "stPetersburg", "brussels3");
}, 1000);

// Exercise 2 Using timestamps, find how many days have passed since the date of your birth.
function calculateDaysPassed() {
  // Starting date: 9th January 1981
  const startingDate = new Date("1981-01-09");
  const startingTimestamp = startingDate.getTime();
  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime();
  const timeDifference = currentTimestamp - startingTimestamp;
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  document.getElementById("daysPassed").textContent = daysPassed;
}
calculateDaysPassed();

//  EXERCICE 2  Write a function to find how many days have passed since any point in time (after 1970).
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    calculateDaysPassed1();
  });

function calculateDaysPassed1() {
  const inputDate = new Date(document.getElementById("inputDate").value);
  const currentDate1 = new Date();
  const timeDifference1 = currentDate1.getTime() - inputDate.getTime();
  const daysPassed1 = Math.floor(timeDifference1 / (1000 * 60 * 60 * 24));
  document.getElementById("daysPassed1").textContent = daysPassed1;
}

// Exercise 3 Using timestamps, find the exact time and date we will be in 80000 hours.
function calculateFutureDate() {
  var currentDate = new Date();
  var futureDate = new Date(currentDate.getTime() + 80000 * 60 * 60 * 1000);
  var year = futureDate.getFullYear();
  var month = futureDate.getMonth() + 1;
  var day = futureDate.getDate();
  var hours = futureDate.getHours();
  var minutes = futureDate.getMinutes();
  var seconds = futureDate.getSeconds();
  var formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  var formattedTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = `The exact date and time 80,000 hours from now will be: ${formattedDate} ${formattedTime}`;
}
let div2 = document.getElementById("timeInTheFuture");
var button2 = document.createElement("button2");
button2.innerHTML = "Calculate";
button2.onclick = calculateFutureDate;
div2.appendChild(button2);

// EXERCICE 3 Write a function to display the time and date for any amount of hours given in the future.
function calculateFutureDate1() {
  var hours = parseInt(document.getElementById("hoursInput").value);
  if (isNaN(hours)) {
    alert("Please enter a valid number of hours.");
    return;
  }
  var currentDate = new Date();
  var futureDate1 = new Date(currentDate.getTime() + hours * 60 * 60 * 1000);
  var year = futureDate1.getFullYear();
  var month = futureDate1.getMonth() + 1;
  var day = futureDate1.getDate();
  var formattedTime1 = futureDate1.toLocaleTimeString();
  var formattedDate1 = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  var resultElement = document.getElementById("result1");
  resultElement.innerHTML = `The exact date and time ${hours} hours from now will be: ${formattedDate1} ${formattedTime1}`;
}
let div3 = document.getElementById("newtime");
var button1 = document.createElement("button1");
button1.innerHTML = "Calculate";
button1.onclick = calculateFutureDate1;
div3.appendChild(button1);
