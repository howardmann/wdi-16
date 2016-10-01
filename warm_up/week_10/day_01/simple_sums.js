// ## Simple Sums
//
// Write a program that can calculate the sum of the first `n` elements of the following sequences:
//
// ```js
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
// ```
// For example:
//
// ```js
// s1(4) = 0
// s2(4) = 10
// ```
//
// Use any language of your choice.
//
// Can you guess what the sum would be if n is infinity?

var s1 = function(num) {
  if (num % 2 === 0) {
    return 0;
  } else {
    return 1;
  }
};

var s2 = function(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum+= i;
  }
  return sum;
};

console.log(s1(4));
console.log(s2(4));
