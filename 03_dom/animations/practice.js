console.log("Practice movements");
//##HM NOTES:
// 1. Query selector to get element
// 2. Set properties of element
// 3. Set variable timerID
// 4. Create callback functions
//    - a) cache style value
//    - b) if statement to check whether to break
//    - c) create new property variable for each interval
//    - d) assign value
// 5. Set timerID value as window.setInterval(callback, ms);

// Query selector to get image
var bill = document.querySelector(".bill");

// Set properties of the image
bill.style.width = "20%";
bill.style.position = "fixed";
bill.style.top = "0%";
bill.style.left = "0%";

// Set variable timerID for future callback
var timerID;
// var newTimerID; //declare second timerID

// Create callback function and break function
var billMove = function() {
  var cachedLeft = parseInt(bill.style.left);

  // Return rule to break window subject to condition
  if (cachedLeft >= 80) {
    // console.log("Reached rule");
    window.clearInterval(timerID);
    bill.style.transform = "ScaleX(-1)";
    timerID = window.setInterval(billBack,50);
    // return;
  }

  // Set new property for each interval
  var newLeft = cachedLeft+1+"%";

  // Assign new property to element
  bill.style.left = newLeft;
};

timerID = window.setInterval(billMove,50);

// Create window callback
var billBack = function() {
  var cachedLeft = parseInt(bill.style.left);

  if (cachedLeft == 0) {
    // console.log("Reached rule");
    bill.style.transform="ScaleX(1)";
    window.clearInterval(timerID);
    timerID = window.setInterval(billMove,50);

    // return false;
  }
  var newLeft = cachedLeft-1+"%";
  bill.style.left = newLeft;
};
