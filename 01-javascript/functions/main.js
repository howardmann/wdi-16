console.log("Functions");

var sayHelloWorld = function() {
  console.log("Hello World");
};

sayHelloWorld();
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();

var multiplyFiveByFive = function() {
  console.log(5*5);
};

multiplyFiveByFive();
multiplyFiveByFive();

var sayHello = function (name) {
  var greeting = "Hello " + name;
  console.log(greeting);
};

sayHello("Groucho");
sayHello("World");

var squareNumber = function(x) {
  var result = x*x; // Math.pow(x,2);
  console.log(result);
};

squareNumber(2); // => 4


var addTwoNumbers = function (x,y) {
  // console.log("X is:",x);
  // console.log("Y is:",y);
  var result = x + y;
  console.log(result);
};

addTwoNumbers(1,2); // => 3

//## Return values
// Use return in place of console.log to store the output in memory

var addThreeNumbers = function (x,y,z) {
  var result = x+y+z;
  return result;
};

console.log(addThreeNumbers(1,2,3)); // => 6

var weirdResult  = addThreeNumbers(100,20,addThreeNumbers(10,10,10)); // 150
console.log(weirdResult); // => 150


var whatDoesReturnDo = function() {
  console.log("This should run");
  return 5;
  console.log("Should this?") // Doesn't run as stops at return
};

whatDoesReturnDo();
console.log(whatDoesReturnDo());



var aBasicFunction = function() {
  console.log("This is reusable");
};

aBasicFunction();

var greet = function(name) {
  console.log("Hello "+name);
};

greet("Jane");

var addNumbers = function(x,y,z) {
  return (x+y+z);
};

var total = addNumbers(1,2,3);
console.log(total);

//## SCOPE


var somethingVeryGlobal = "Very Global";

var ourFirstContainer = function() {
    var somethingGlobal = "Global";

    var ourSecondContainer = function() {
      var somethingLocal = "Local";
      console.log(somethingVeryGlobal,ourFirstContainer,somethingGlobal, ourSecondContainer, somethingLocal);
    };

    ourSecondContainer();
};

ourFirstContainer(); // somethingVeryGlobal , console.log(somethingVeryGlobal, ourFirstContainer);

var firstNumber = 1;

var trapSecondNumber = function() {
  var secondNumber = 2;

  var trapThirdNumber = function () {
    var thirdNumber = 3;
  };

  console.log(thirdNumber);
};
trapSecondNumber();

// Global scope is every piece of code that is not within a function. Every function creates a new local scope which cannot be accessed by the global scope



console.log(firstNumber, secondNumber, thirdNumber);
