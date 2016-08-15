console.log("Warm up");

// # 99 Bottles of Beer
//
// Write a program which prints out the lyrics to that beloved classic, that field-trip favorite: _99 Bottles of Beer on the Wall._
//
// ## Requirements
//
// * The program should be called with `Beer.song`
// * The program should output text to the console
// * Each verse in a song should be separated by a single blank line.
//
// ## Extensions
//
// * Make the type of beer customizable
// * Allow the following function calls to work:
//   - ` Beer.song() ` - That should do the whole song
//   - ` Beer.song(45) ` - This should do from 45 down
//   - ` Beer.song(34, 12) ` - This should print from 34 to 12
//
// ## Data
//
// Here's a sampling of the lyrics...
//
// ```
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
//
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
//
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ```
//
// Then, at the end...
//
// ```
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// ```
//
// ## Source
// [Learn to Program](http://pine.fm/LearnToProgram/?Chapter=06) by Chris Pine

var countDown = function(start,end) {
  var count = start;

    for (var i = start; i > end; i--) {
      if (count===1) {
        console.log("Buy more");
        return false;
      }
      else {
      console.log(i+ " bottles of beer on the wall \n");
      console.log((i-1)+" bottles remaining");
      count--;
      }
    }
};


var argArr = [];

var returnSong = function() {
  var i = 0;
  while(arguments[i]) {
    argArr.push(arguments[i]);
    i++;
  }
  var start = argArr[0] || 99;
  var end = argArr[1] || 0;

  countDown(start,end);

};

// returnSong();
returnSong(10,0);
