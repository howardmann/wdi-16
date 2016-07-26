console.log("Exercise 05: Temperature Converter");

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 32;
var fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(celsius+"\u00B0C"+" is "+fahrenheit+"\u00B0F");

var fahrenheit1 = 89;
var celsius1 = Math.floor((fahrenheit1-32)*5/9);

console.log(fahrenheit1+"\u00B0F"+" is "+celsius1+"\u00B0C");
