console.log("Week_04 day_01 warmup");

/*
# The Sieve of Eratosthenes

The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

Create your range, starting at two and ending at the given limit.

The algorithm consists of repeating the following over and over:

- take the next available unmarked number in your list (it is prime)
- remove all the multiples of that number (they are not prime)

Repeat until you don't have any possible primes left in your range.

When the algorithm terminates, all the numbers in the list that have not been removed are prime.

*/


var newArr = [];
var primeArr = [2];


var pushPrime = function(limit) {
  for (var i = 2; i <= limit; i++) {
    newArr.push(i);
  }

  for (var i = 1; i < newArr.length; i++) {
    prime = false;

    for (var j = 0; j < i; j++) {
      if (newArr[i] % newArr[j] !== 0) {
        prime = true;
      } else {
        prime = false;
        break;
      }
    }

    if (prime === true) {
      primeArr.push(newArr[i]);
    }
  }
};

var value = window.prompt("Enter max number");
pushPrime(value)
document.querySelector('.msg p').innerHTML = primeArr;
