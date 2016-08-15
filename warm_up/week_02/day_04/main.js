console.log("Warm up");

// # Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
//
// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
//
// ## Suggestions
//
// - Start out by getting this working with discrete functions.
// - If you feel comfortable with that, try to put all your functions, collections, etc, into an object.


// Create function to check if anagram of word is true
var isAnagram = function(word, anagram) {
  var valid = true;

  if (word.length === anagram.length) {
    for ( var i = 0; i < anagram.length; i+=1 ) {
      if ( word.includes(anagram[i]) ) {
        valid = true;
      } else {
        valid = false;
        return valid;
      }
    }
    return valid;
  }
};

// Create function to return anagram of word from array
var returnAnagram = function(word, anagramArr) {
  var newArr = [];
  for ( var i = 0; i < anagramArr.length; i+=1 ) {
    if ( isAnagram( word, anagramArr[i] ) ){
      newArr.push(anagramArr[i]);
    }
  }
  return newArr;
};

console.log(returnAnagram("listen",["enlists", "inlets","stelin", "google", "wow"]));

// Bonus exercise put all in object

var Anagram = {
  addAnagram: function(anagram) {
    this.collection = this.collection || [];
    this.collection.push(anagram);
  },
  checkAnagram: function(word) {
    for ( var i = 0; i < this.collection.length; i+=1 ) {
      if ( isAnagram( word, this.collection[i] ) ){
        console.log( this.collection[i] );
        return this.collection[i];
      }
    }
  }
};

Anagram.addAnagram("enlists");
Anagram.addAnagram("google");
Anagram.addAnagram("inlets");
Anagram.addAnagram("banana");
