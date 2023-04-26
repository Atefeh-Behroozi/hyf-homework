//1
setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

//2
function notThisFunctionName(delay, stringToLog) {
setTimeout(() => console.log(stringToLog), delay * 1000);
  }
  
// Calling the function with different arguments
notThisFunctionName(5, "This string logged after 5 seconds");
notThisFunctionName(3, "This string logged after 3 seconds");

//4
function earthLogger() {
console.log("Earth");
}
  
function saturnLogger() {
console.log("Saturn");
}
  
function planetLogFunction(logFunction) {
logFunction();
}
  
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);
  
//5
function getLocation() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
});
} else {
    console.log("Geolocation is not supported by this browser.");
}
} 
//7
function runAfterDelay(delay, callback) {
setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function() {
console.log('should be logged after 4 seconds');
});

//8
let clicks = 0;
let timeout;

function checkDoubleClick() {
  clicks++;
  if (clicks === 2) {
    console.log("double click!");
    clicks = 0;
    clearTimeout(timeout);
    return;
  }
  timeout = setTimeout(() => {
    clicks = 0;
  }, 500);
}

document.addEventListener("click", checkDoubleClick);

//9
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
    console.log("Why was the math book sad? Because it had too many problems.");
}
  
function logBadJoke() {
    console.log("What do you call a fake noodle? An impasta.");
}
  
jokeCreator(true, logFunnyJoke, logBadJoke); 
jokeCreator(false, logFunnyJoke, logBadJoke);
