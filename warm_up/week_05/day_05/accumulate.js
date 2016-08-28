// # Accumulate
//
// For example, given the collection of numbers:
//
// - 1, 2, 3, 4, 5
//
// And the operation:
//
// - square a number
//
// Your code should be able to produce a collection of the squares of the original numbers.
//
// - 1, 4, 9, 16, 25
// - _(eg 1\*1, 2\*2, 3\*3, 4\*4, 5\*5)_
//
// ## Optional Extras
//
// - Square Root a Number
// - Cube a number
// - Even and Odd
// - Or return an object containing all of those things:
//
//   ```
//   {
//     original: [1, 2, 3, 4, 5],
//     squares: [...],
//     squareRoots: [...],
//     cubes: [...],
//     evenAndOdd: [true, false, true]
//   }
//   ```

var Accumulate = {
  square: function(arr) {
    return arr.map(function(obj){
      return Math.pow(obj,2);
    });
  },
  cube: function(arr) {
    return arr.map(function(obj){
      return Math.pow(obj,3);
    });
  },
  squareRoots: function(arr) {
    return arr.map(function(obj){
      return Math.sqrt(obj);
    });
  },
  evenAndOdd: function(arr) {
    return arr.map(function(obj){
      if (obj % 2 === 0){
        return true;
      } else {
        return false;
      }
    });
  }
};

console.log(Accumulate.square([1,2,3]));
console.log(Accumulate.cube([1,2,3]));
console.log(Accumulate.squareRoots([4,16,25]));
console.log(Accumulate.evenAndOdd([4,16,25]));
