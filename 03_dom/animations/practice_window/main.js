console.log("Cage Rage");

// Get element

var cage = document.querySelector(".cage");
cage.style.width = "20%";
cage.style.position = "fixed";
cage.style.left = "0%";

// Declare timerID variable for future callback
var timerID;

// Create goForward callback function
var goForward = function() {
  var cachedLeft = parseInt(cage.style.left); // Cache value

  if (cachedLeft === 40) {
    console.log("reached middle");
    window.clearInterval(timerID);
    cage.setAttribute("src","http://www.placecage.com/gif/200/200");
    setTimeout(function() {
      cage.setAttribute("src","http://www.anniemation.com/clip_art/images/cat-walk.gif");
      timerID = window.setInterval(goForward,50)
    }, 3000);

  }

  // If rule reached assign timerID to new function
  if (cachedLeft >= 80) {
      console.log("Reached rule");
      window.clearInterval(timerID);
      cage.setAttribute("src","http://www.placecage.com/c/200/200");
      timerID = window.setInterval(goBack,50);
  }

  // Create and assign new value
  var newLeft = cachedLeft + 1 + "%";
  cage.style.left = newLeft;

};

// Assign value of window.setInterval(callback, ms) to timerID
timerID = window.setInterval(goForward, 100);

// Create goBack callback function
var goBack = function() {
  var cachedLeft = parseInt(cage.style.left); // Cache value

  // If rule reached assign timerID to new function
  if (cachedLeft == 0) {
      console.log("Reached rule");
      window.clearInterval(timerID);
      cage.setAttribute("src","http://www.anniemation.com/clip_art/images/cat-walk.gif");
      timerID = window.setInterval(goForward,50);
  }

  // Create and assign new value
  var newLeft = cachedLeft - 1 + "%";
  cage.style.left = newLeft;

};
