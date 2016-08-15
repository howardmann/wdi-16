console.log("Week_02 warm up exercises");

/*
## Nucleotide Count

DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

Shortest intro to biochemistry EVAR:

* twigs are to birds nests as
* nucleotides are to DNA and RNA as
* amino acids are to proteins as
* sugar is to starch as
* oh crap lipids

I'm not going to talk about lipids because they're crazy complex.

So back to nucleotides.

There are 5 types of nucleotides. 4 of these occur in DNA: `A`, `C`, `G`, and `T`. 4 occur in RNA: `A`, `C`, `G`, `U`.

There are no other nucleotides.

Make sure that you validate it has nucleotides!

Find how many of each nucleotides are in a string that you pass in to a function
*/

var nucStr = ["A","C","T","G","U"];

var howMany = function(str) {
  var count = 0;
  var strArr = str.toUpperCase();
  for (var i=0; i<strArr.length; i++) {
    if (nucStr.includes(strArr[i])) {
      count++;
    }
  }
  console.log(count);
  return count;
};

howMany("amino");
howMany("actgu");
howMany("abba");
howMany("nucleotides");

// Bonus: find out how many times each letter occurs

// Create reference variable of nucleotides
var reference = ["A","C","T","G","U"];

// Create first function to return count of how many times a letter occurs in a given string

// Test if condition holds true. Start with negative
var valid = false;

var countRef = function(str, letter) {
  var count = 0;
  for (var i=0; i<str.length; i++) {
    if (str[i] === letter) {
      count++;
      valid = true;
    }
  }
  return count;
};

var checkRef = function(str) {
  var strAdj = str.toUpperCase();
  var msg = '';

  for (var i=0; i<reference.length; i++) {
    var count = countRef(strAdj, reference[i]);
    msg += reference[i]+": "+count+"\n";

  }

  if (valid) {
    valid = false; // reset valid counter
    return msg;
  } else {
    return "no valid references"
  }
};

console.log(checkRef("aaa"));
console.log(checkRef("qqqq"));
console.log(checkRef("uuuu"));
