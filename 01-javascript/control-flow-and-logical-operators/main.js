console.log("Hello World");

// if (condition) {
//   code to execute
// }

// if (condition) {
//   code to execute
// }
// else {
//   code to execute
// }

// FORMAT OF AN IF/ELSE ELSE/IF STATEMENT
// if (condition) {
// code;
// } else if (condition){
//   code;
// } else {
//   code;
// }

var cond = true === true;
if (cond) {
  console.log("That seems obvious");
}

var myAge = 16;

if (myAge >= 18) {
  console.log("You can drink");
}
else {
  console.log("You are underage");
}

var x = 10;
var y = 20;

// If the value of x multipled by two is equal to the value of y print console y is double otherwise print the console its not double

if (x*2===y) {
  console.log("y is double x");
} else {
  console.log("y is not double x");
}

// && LOGICAL AND
// || LOGICAL OR
// ! LOGICAL NOT

// If name is Howie and occupation is Student then print out that you probably study at GA
var myName = "Howie";
var myOccupation = "Student";

if (myName === "Howie" && myOccupation === "Student") {
  console.log ("You probably study at GA");
} else {
  console.log("No idea who you are bud");
}

// If a person is over 18 or a youthful hacker then print out you can visit the site otherwise go to myLittlePony.com

var age = 16;
var youthfulHacker = true;

if (age >= 18 || youthfulHacker) {
  console.log("You can visit the site");
} else {
  console.log("visit mylttlepony.com");
}

// If the persons name is the Blade and the occupation is teacher output good choice. If the persons name is Blade and the occupation is ping pong player , really horrible choice. Otherwise I don't know who you are

var personName = "The Blade";
var personsOccupation = "Teacher";

if (personName === "The Blade" && personsOccupation === "Teacher") {
  console.log("good choice");
} else if (personName === "The Blade" && personsOccupation === "ping pong player") {
  console.log("horrible choice");
} else {
  console.log("I dont know who you are");
}

// If the age is over 35 print you can vote and hold any place on government. Else if the age is over 25 print you can vote and runf or the senate. Else if the age is over 18 print you can vote. Oherwise print noone cares
var myAge = 42;

if (myAge > 35) {
  console.log("you can vote and hold any place on government");
} else if (myAge > 25) {
  console.log("you can vote and run for senate");
} else if (myAge > 18) {
  console.log("you can vote");
} else {
  console.log("noone cares");
}
