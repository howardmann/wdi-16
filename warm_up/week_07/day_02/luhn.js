// # Luhn Formula
//
// Write a program that can take a number and determine whether or not it is valid per the Luhn formula.
//
// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.
//
// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:
//
// Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit (check digit does NOT get doubled, digit to the left of check digit DOES get doubled).
//
// For any digits that thus become 10 or more, subtract 9 from the result.
//
// E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).
//
// Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.
//
// If the total ends in 0 (put another way, if the total modulus 10 is congruent to 0), then the number is valid according to the Luhn formula; else it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).
//
// Write a program that, given a number
//
// a) can check if it is valid per the Luhn formula.
//
// b) can add a check digit to make the number valid per the Luhn formula.
//
// ```ruby
// Luhn.new(3554).valid?
// # => false
//
// Luhn.new(8763).valid?
// # => true
// ```

// Answer in JS

var luhn = function(number) {
  // Convert number to array
  var numArr = number.toString().split('').map(function(el) {
    return parseInt(el)
  });
  console.log(numArr);

  // Loop through array, every second element from end
  for (var i = numArr.length - 2; i >= 0; i -= 2) {
    if ((numArr[i] * 2) > 9) {
      numArr[i] = numArr[i] * 2 - 9;
    } else {
      numArr[i] *= 2;
    }
  }
  console.log(numArr);

  // Sum array
  var sumArr = numArr.reduce(function(sum, el) {
    return sum + el;
  }, 0);
  console.log(sumArr);

  // Check if sum result is divisible by 10
  if (sumArr % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

// Check results
console.log(luhn(1111));
console.log(luhn(8763));
console.log(luhn(3554));
console.log(luhn(8763));
