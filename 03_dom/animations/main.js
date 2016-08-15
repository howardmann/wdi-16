console.log("Animations JS");

// // Create variable storing selected image
// var cageImg = document.querySelector(".cage");
//
// // Set width of image to 200px
// cageImg.style.width = "200px";
// cageImg.style.border = "5px solid hotpink";
//
// // Create function making image bigger
// var cageBigger = function() {
//   var currentWidth = cageImg.style.width;
//   var newWidth = parseInt(currentWidth)+100;
//   cageImg.style.width = newWidth+"px";
// };



// window.setInterval(cageBigger,1000);

// Select element
var billImg = document.querySelector(".bill");
// Keep track of the animation
var timerID = null;
// Give starting point to animation
billImg.style.display = "block";
billImg.style.margin = "0 auto";
billImg.style.width = "10%";
billImg.style.opacity = 1.0;

var billFade = function() {
  var currentOpacity = billImg.style.opacity;

  if (currentOpacity <= 0) {
    window.clearInterval( timerID );
    console.log("Clear");
    return false;
  }
  var newOpacity = currentOpacity - 0.01;
  // var newOpacity = currentOpacity - 0.1;
  billImg.style.opacity = newOpacity;

};

// timerID = window.setInterval(billFade,50);
console.log( timerID );

var billBigger = function() {
  var currentWidth = billImg.style.width;


  if (parseInt(currentWidth) < 100) {
    window.clearInterval( timerID ); // Stop the timer and the animation
    return false;
  }

  var random = (Math.random()*20)-10;
  var newWidth = parseInt(currentWidth)+random;
  billImg.style.width = newWidth+"%"
};

//Add event listener of clicking bill
billImg.addEventListener("click",function() {
  var randomInterval = Math.random()*500;
  billImg.style.border = "1px solid hotpink";
});


// Animation: Moving images
// Select bill image
var bill = document.querySelector(".bill");
//Give a starting point for the Animation. Top left
bill.style.position = "fixed";
bill.style.top = "0px";
bill.style.left = "0px";

//Set up a variable that will eventually reference the timer
var timeID = null;

//Create a function that will be used as a callback
var moveBill = function() {
  var cachedTop = parseFloat( bill.style.top ); // parseFloat is to get the decimal
  if ( cachedTop >= 500 ) {
    window.clearInterval( timerID );
    return false; // Break function
  }

  console.log( cachedTop );
  var newTop = cachedTop + 10;
  console.log( newTop );
  bill.style.top = newTop+"px";
};
// Create timer, saving timeID into variable to clear when it returns true for a rule

timeID = window.setInterval( moveBill, 300 );
console.log( timeID );
