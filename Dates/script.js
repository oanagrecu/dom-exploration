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
// Exercise 1
// Find the timezones of :

//   as a single function
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

//   Exercise 2
//   Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

function calculateDaysPassed() {
  // Starting date: 9th January 1981
  const startingDate = new Date("1981-01-09");
  const startingTimestamp = startingDate.getTime();

  // Current date
  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime();

  // Calculate the difference in milliseconds
  const timeDifference = currentTimestamp - startingTimestamp;

  // Convert milliseconds to days
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  document.getElementById("daysPassed").textContent = daysPassed;
}

// Calculate days passed on page load
calculateDaysPassed();

//   Write a function to find how many days have passed since any point in time (after 1970).
