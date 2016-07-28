console.log("Loops");

//## While condition Loops
var counter = 0;
// Create a loop that will count to 20, and then stop
while (counter <= 20) {
  console.log(counter);
  counter++;
}
console.log("Twenty!!");


// ## For Loops
// Starting point, ending condition, step or increment


for (var i = 20; i >= 0; i--) {
  console.log(i);
}

console.log("Back to ground zero!");


// Using for loop print out every five numbers from zero up to 100

var blastOff = function (max, multiple) {
  for (var i=0; i <= max; i+=multiple) {
    console.log(i);
  }
  console.log("Blast Off!");
}

blastOff(10,2);


// Loop break statement

var findFirstNumDivisibleBySeven = function() {
  for (var i = 1; i <= 21; i++) {
    if (i%7===0) {
      console.log("We found it!");
      break;
    } else {
    console.log(i);
    }
  }
};

findFirstNumDivisibleBySeven();
