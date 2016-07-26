console.log("Exercise 02: Age Calculator");

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2016;
var birthYear = 1980;
var ageUpper = currentYear - birthYear;
var ageLower = currentYear - birthYear - 1;

console.log("They are either "+ageUpper+" or "+ageLower);

console.log("");
