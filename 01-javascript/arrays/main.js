console.log("Array exercises");

// 1. Make arrays
var emptyArr = [];
var alphabet = ["a","b","c","d","e"];
alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

var silly = [
  "string",
  42,
  [false],
  undefined,
  true
];

// 2. Accessing particular elements
//The letter a
console.log(alphabet[0]);
//The letter b
console.log(alphabet[1]);
//The letter z
console.log(alphabet[length-1]);
//The array in the silly array
console.log(silly[2]);
//Bonus points for the false boolean out of silly array
console.log(silly[2][0]);

// 3. Reassigning elements
//a to A
alphabet[0] = alphabet[0].toUpperCase();
console.log(alphabet[0]);
//c to C
alphabet[2] = alphabet[2].toUpperCase();
console.log(alphabet[2]);
//undefined to null
silly[3] = null;
console.log(silly[3]);
//false to true
silly[2][0] = !silly[2][0];
console.log(silly[2][0]);

//4. Adding elements
var fruits = ["orange","mango","mandarin","grape"];
fruits.push("watermelon");
fruits.unshift("kiwifruit");
console.log(fruits);

//5. Removing elements
fruits.pop();
fruits.shift();
console.log(fruits);

//6. Finding items
var weirdInstruments = [
    "Badgermin",
    "The Great Stalacpipe Organ",
    "Stylophone",
    "Ondes Martenot",
    "Sharpischord",
    "Hydraulophone",
    "Pyrophone"
];

var badgerminIndex = weirdInstruments.indexOf("Badgermin");
console.log(badgerminIndex);

var pyroIndex = weirdInstruments.indexOf("Pyrophone");
console.log(pyroIndex);

var doesntExist = weirdInstruments.indexOf("Rolipoli");
console.log(doesntExist);

var checkExistence = function (instrument) {
  if (weirdInstruments.indexOf(instrument) !== -1) {
      console.log("Yep its there");
  } else {
    weirdInstruments.push(instrument);
    console.log(weirdInstruments);
  }
};
checkExistence("Stylophone");
checkExistence("Ondes Martenot");
checkExistence("New thing");


// 7. Removing specific items

var fruits = [
    "Mango",
    "Orange",
    "Banana",
    "Apple",
    "Kiwi Fruit"
];

var bIndex = fruits.indexOf("Banana");
fruits.splice(bIndex,1);
fruits.splice(bIndex,0,"Banana");

// ## slice only works for strings, splice works for arrays

// slice is not destructive while splice is destructive

// ## Copying arrays
// make an exact copy use slice method arr.slice(0,arr.length);
// shorthand use slice(); to make a copy of an array

var arrOfNumbers = [1,2,3];
var newArrOfNums = arrOfNumbers.slice();
//There is now no link between the two


// Note: Using slice to copy an array is not very common because you have already defined the array and would just reference it again

// ## Looping through arrays
var arrOfFruits = ["Orange", "Mango", "Mandarin"];

//How we access individiual elements of an array
//How we could use something we already know to print them all out

//Using for loop
for (var i=0; i < arrOfFruits.length; i++ ) {
  console.log(arrOfFruits[i]);
}

//Using built-in map method. Note: only works for modern browsers and is typically only used for altering data
arrOfFruits.map(function(i) {
  console.log("The current element is "+i);
});
