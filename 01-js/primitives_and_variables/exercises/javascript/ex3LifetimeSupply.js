console.log("Exercise 03: Lifetime Supply");

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = 28;
var maxAge = 50;
var snackDay = 3;
var snackTotal = (maxAge - age)*snackDay*365;

console.log("You will need "+snackTotal+" snacks to last you until the ripe old age of "+maxAge);

console.log("");
