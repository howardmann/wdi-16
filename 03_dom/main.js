console.log("DOM lesson");

// document.getElementsById("someID"); --> gets single ID element

var heading = document.getElementById('mainHeading');
var p = document.getElementById('important');
var bill = document.getElementById('bill');

console.log(heading, p, bill);

// document.getElementsByTagName("someTag"); --> gets array of elements by tag name

var allParagraphs = document.getElementsByTagName("p");

for (var i=0; i<allParagraphs.length; i++) {
  // change all parahgraps on page to display Paragraph #1, #2, #3
  allParagraphs[i].innerHTML = "Paragraph #"+(i+1);
  console.log(allParagraphs[i]);
}

var allListItems = document.getElementsByTagName("li");
console.log(allListItems);

var toDoListItems = document.getElementsByClassName('todo');
console.log(toDoListItems);

// Print to the console the text of each one of the todo items
//For loop to iterate through everything that has the class of todo
//For each todo item, use a property or method to access the current text
//Log that to the console
for (var i=0; i<toDoListItems.length; i++) {

  console.log( toDoListItems[i].innerHTML );
}

// Query selectors give back one value through CSS style selectors and DOM traversal

var firstOL = document.querySelector( "ol li" );
console.log( firstOL );

var allOL = document.querySelectorAll( "ol li" );
console.log( allOL);
for (var i=0; i<allOL.length; i++) {
  allOL[i].innerHTML= "anything";
}

// Get and modify attributes of elements. Use this for sources you cant access. Accessing variable only works for src and href but not other attributes e.g. fill etc.
var billImage = document.getElementById("bill");
var billImageSRC = billImage.getAttribute("src");
billImage.setAttribute("src","http://unsplash.it/200/200")

// Using query selector to modify images. Note document.querySelector() and document.querySelectorAll() has superceded document.getElementById(); document.getElementsByTagName() and document.getElementsByTagName();

var bill2Image = document.querySelector("#bill2");
bill2Image.src = "http://placecage.com/gif/200/200"

var link = document.querySelector("a");
link.innerHTML = "Hacker Typer";
link.href = "http://hackertyper.com"

// Changing styles
  //change display property to block on the aTag
  // create some margin at bottom

link.style.display = "block";
link.style.marginBottom = "20px";

var body = document.querySelector("body");
body.style.background = "chartreuse";
body.style.textAlign = "center";


// innerHTML to replace text. Don't use innerText
// document.body.innerHTML = "<h1>Hello World</h1>";
// document.body.innerHTML += "<p>More content here</p>";
//
// document.body.innerText += "<script>alert('You have been hacked');</script>";


// Create nodes

var newParagraph = document.createElement('p'); // <p></p>
var paragraphText = document.createTextNode("New paragraph from createElement('p') and then createTextNode('string') and then body.appendChild()"); // "Create text string"

newParagraph.style.fontFamily = "monospace";

newParagraph.appendChild( paragraphText );

document.body.appendChild( newParagraph );


// Event listeners; .addEventListener("click", function() {});
var girl = document.querySelector("img#unsplash");

girl.addEventListener("click", function() {
  console.log("Girl was clicked");
  document.body.style.backgroundColor = "hotpink";
  girl.src = "http://unsplash.it/g/200/200";
});

var bigHeading = document.querySelector("h1");

bigHeading.addEventListener("click",function(){
  console.log("Heading was clicked");
  document.body.style.backgroundColor = "rebeccapurple";
  document.body.style.color = "yellow";
  girl.src = "http://www.placecage.com/gif/300/200";

});


// Define my target element
var myParagraph = document.querySelector("#important");

//Define my callback
var alertUser = function() {
  alert("You just clicked something");
};

//What event am I listening to? click
//Bind the event and the callback to the element
myParagraph.addEventListener("click",alertUser);


// How to access what the event object has. Pass in event as argument and console log it

var body = document.body;

var showDetails = function ( event ) {
  // console.log( event ); -->use console log to see all the information that is tracked
  var myMessage = "X: " + event.clientX + " Y: " + event.clientY;
  // console.log(myMessage);
};

// When the body is clicked, browser t call showDetails function

body.addEventListener("mousemove",showDetails);


// Adding event listener to h1 and creating callback to modify innerHTML of element
var allHeadings = document.querySelectorAll("h1");

var changeText = function( event ) {
  console.log( "Text should be changed ", this );
  var currentText = this.innerHTML;
  this.innerHTML = currentText.toUpperCase();
  console.log( currentText );

};

for ( var i = 0; i < allHeadings.length; i += 1 ) {
  var currentHeading = allHeadings[i];
  currentHeading.addEventListener( "click", changeText );
  console.log( currentHeading );
}

// ## ADDING CLICK COUNT HANDLER
// Create counter variable and h2 selector
var clickCount = 0;
var h2target = document.querySelector("h2");

// Define callbak
var updateClickCount = function(e) {
  clickCount++;
  console.log(clickCount);
  document.querySelector("h2 span").innerHTML = clickCount;
};

h2target.addEventListener( "click", updateClickCount );


// TIMERS. 2 arguments: 1st argument callback and 2nd is number in ms
// window.setTimeout( callback, timeInMilliseconds); - delay
// window.setTimeout( function() {}, 1000);
var delayedFunction = function() {
    console.log("This wont happen immediately");
};

window.setTimeout(delayedFunction,5000);

// window.setInterval( callback, timeInMilliseconds); - regular. Example used in gmail to fetch new mail from server
// window.setInterval( function() {}, 1000);
var regularFunction = function() {
  console.log("This will happen in intervals");
};

window.setInterval(regularFunction, 8000);


//Example modify element
var cage = document.querySelector('#cage');

var updateCage = function() {
  console.log( "Should update Cage ");
  cage.src = "http://placecage.com/c/200/200"
  cage.width+=50;
};

window.setInterval( updateCage, 3000 );
