console.log("Day05 Warm Up Exercises");

// ## Serge Says
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

var sergeSays = function (input) {
  if (input === null) {
    console.log('Fine. Be that way!');
  } else if (input.endsWith("?")) {
    console.log("Sure");
  } else if (input === input.toUpperCase() && input.length >0) {
    console.log("Woah, chill out!");
  } else {
    console.log("Whatever!");
  }
};

sergeSays("Ends with question mark?"); // => 'Sure'
sergeSays("ALL CAPS"); // => 'Woah, chill out!'
sergeSays(null); // => 'Fine. Be that way!'
sergeSays("Anything else"); // => 'Whatever!'
sergeSays(""); // => 'Whatever!'
