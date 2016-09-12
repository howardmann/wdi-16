// Write a function in JS which takes a number as its argument and returns an array containing the prime factors of that number

// Get an array of all the numbers up to the argument passed into the function
var getArray = function(num) {
  var arr = [];
  for (var i = 2; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

// Get an array of all the PRIME numbers from the first array
var getPrimes = function(num) {
  var primes = [];
  var range = getArray(num);
  for (var i = 0; i < range.length; i++) {
    var primeCandidate = range[i];
    var prime = true;
    for (var j = 2; j < primeCandidate; j++) {
      if (primeCandidate % j === 0) {
        prime = false;
      }
    }
    if (prime === true) {
      primes.push(primeCandidate);
    }
  }
  return primes;
};

// Get the prime factors of the argument passed into the function. using the array of PRIME numbers
var getPrimeFactors = function(num) {
  var primeFactors = [];
  var primes = getPrimes(num);
  for (var i = 0; i < primes.length; i++) {
    while (num % primes[i] === 0) {
      primeFactors.push(primes[i]);
      num /= primes[i];
    }
  }
  return primeFactors;
};

// Execute code
console.log(getPrimes(60));
console.log(getPrimeFactors(60));
