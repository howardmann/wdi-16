console.log("Hello World");

// ## Grains
//
// There once was a wise servant who saved the life of his king. The king promised to pay whatever the servant could dream up. The servant told the king he would take his reward in grains of wheat, to be calculated using a chessboard - starting with one grain of rice on the first square of the chessboard, each subsequent square should have double the number of grains of rice of the previous square. That is, one grain on the first square of a chess board. Two grains on the second. Four grains on the third. Eight grains on the fourth. 16 on the fifth, and so on.
//
// There are 64 squares on a chessboard.
//
// Write a program that shows
// 1) how many grains were on a particular square
//   - Example: `'Square 3: 4'`.
//
// 2) how many grains were on each square
//   - That is:
//     `'Square 1: 1'`
//
//     `'Square 2: 2'`
//
//     `'Square 3: 4'`
//
//     `'Square 4: 8'`
//
//     `'Square 5: 16'`
//
//     - [etc]
//
// 3) the total number of grains on the board
//   - That is:
//     `'The total number of grains is _[????]_'`
//
// Do this in JS (why not use Underscore to take advantage of some of its helpful, Ruby-esque methods, like _.range, _.reduce, etc?).
//
// ### Extensions
//
// Implement a simple HTML UI which you can use to perform each of the calculations above (feel free to use jQuery).

// Using underscore.js
var grains = {

  range: _.range(1, 65),

  square: function(square) {
    // Number of grains on any single square
    return Math.pow(2, square - 1);
  },

  eachSquare: function() {
    // Console.log the number of grains on every square
    _.each(grains.range, function(i) {
      var grain = grains.square(i);
      console.log("Square " + i + ": " + grain);
    });

  },

  total: function() {
    // Number of grains on every single square
    return _.reduce(grains.range, function(sum,num){
      return sum + grains.square(num);
    },0);
  },
};

console.log(grains.range);
console.log(grains.square(2));
console.log(grains.eachSquare());
console.log(grains.total());

// Using vanilla JS
var grainObj = {};
for (var i = 1; i < 65; i++) {
  var label = "square " + i;
  grainObj[label] = Math.pow(2,i-1);
}
console.log(grainObj);

console.log(grainObj["square 1"]);
console.log(grainObj["square 2"]);
