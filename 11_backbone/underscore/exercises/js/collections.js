console.log("Underscore collections");

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// ## Exercises
// - Iterate through ` numbers ` and log each number to the console
_.each(numbers, function(el){
  console.log(el);
});
// - Iterate through ` numbers ` and multiply each one of them by 5
var multiplyArr = _.map(numbers, function(el){
  return el * 5;
});
console.log(multiplyArr);
// - Iterate through ` numbers ` and reduce it by adding them together
var sumArr = _.reduce(numbers, function(sum, el){
  return sum += el;
},0);
console.log(sumArr);
// - Get an array of all of the people in ` people ` that have the username "E"
var userArrE = _.filter(people,function(el){
  return el["username"] === "E";
});
console.log(userArrE);
// - Find the first object in ` people ` that has the id of 3
var firstID = _.find(people,function(el){
  return el["id"] === 3;
});
console.log(firstID);
// - Find the first person who has an age of less than 50
var firstAgeBelowFifty = _.find(people,function(el){
  return el["age"] < 50;
});
console.log(firstAgeBelowFifty);
// - Get an array of all of the people with an age of over 60
var firstAgeOverSixty = _.filter(people,function(el){
  return el["age"] > 60;
});
console.log(firstAgeOverSixty);
// - Remove all of the people with an age less than 40
var rejectAgeUnderForty = _.reject(people,function(el){
  return el["age"] < 50;
});
console.table(rejectAgeUnderForty);

console.log("Underscore collections 2");

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
];

// ## Exercises
// - Sort the ` people ` by 'uid'
var sortByUID = _.sortBy(people, 'uid');
console.table(sortByUID);

// - Group the random words by the lower case version of their first letter
var groupWords = _.groupBy(words,function(el){
  return el[0].toLowerCase();
});
console.table(groupWords);

// - Check to see if all the words have more than 3 characters
var allOverThree = _.every(words,function(el){
  return el.length > 3;
});
console.log(allOverThree);

// - Check if some words are over twenty characters long
var someOverTwenty = _.some(words,function(el){
  return el.length > 20;
});
console.log(someOverTwenty);

// - Get an array of all of the uids in ` people `
var pluckUID = _.pluck(people,'uid');
console.log(pluckUID);

// - Find the person with the highest uid
var maxUID = _.max(people, function(el){
  return el["uid"];
});
console.log(maxUID);

// - Return an object that says how many even numbers and how many odd numbers there are in ` numbers `
var countGroup = _.countBy(numbers, function(el){
  if (el % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
console.log(countGroup);

// - Get three random numbers out of ` numbers `
var randNum = _.sample(numbers,3);
console.log(randNum);
