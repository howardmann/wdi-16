//#################
console.log("Fortune Teller:");

var tellFortune = function(numChild,parterName,geoLoc,jobTitle) {
  console.log("You will be a "+jobTitle+" in "+geoLoc+", and married to "+parterName+" with "+numChild+" kids.");
};

tellFortune(2,"Jane","Austria","Carpenter");
tellFortune(8,"Anette","Bosnia","Hustler");
tellFortune(1,"Bob","California","Life Coach");

//#################
console.log("\nAge Calculator:");

var calculateAge = function(birthYear, currentYear) {
  var highAge = currentYear - birthYear;
  var lowAge = currentYear - birthYear - 1;
  console.log("You are either "+lowAge+" or "+highAge);
};

var currentYear = new Date().getFullYear();

calculateAge(1970,currentYear);
calculateAge(1980,currentYear);
calculateAge(1990,currentYear);


//#################
console.log("\nLifetime Supply Calculator:");

var calculateSupply = function(age, amtDay) {
  var maxAge = 50;
  var amtTotal = Math.floor(amtDay * 365);
  console.log("You will need "+amtTotal+" to last until the ripe old age of "+maxAge);
};

calculateSupply(20,10.1);
calculateSupply(30,5);
calculateSupply(40,1);

//#################
console.log("\nGeometrizer:");

var calcCircumference = function(radius) {
  var pi = Math.PI;
  var circ = radius*2*pi;
  console.log("The circumference is equal to "+Math.floor(circ)+" units");
};

calcCircumference(10);
calcCircumference(5);
calcCircumference(15);

//#################
console.log("\nTemperature Converter:");

var celsiusToFahrenheit = function (num) {
  var celsius = num;
  var fahrenheit = num * 1.8 + 32;
  console.log(celsius+"\u00B0C is "+fahrenheit+"\u00B0F");
};

var fahrenheitToCelsius = function (num) {
  var fahrenheit = num;
  var celsius = (num - 32)/ 1.8;
  console.log(fahrenheit+"\u00B0F is "+celsius+"\u00B0C");
};

celsiusToFahrenheit(20);
fahrenheitToCelsius(68);
