console.log("Array exercise");

/*

# Exercises: Arrays

## Your top choices

Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".

- For each choice, log to the screen a string like: "My #1 choice is blue."
- **Bonus:** Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

*/

var topArr = [
  "Kazakhstan",
  "Tajikistan",
  "Pakistan",
  "Afghanistan",
  "Kyrgyzstan"
];

console.log("My top 5 favourite stans:")
for (var i=0; i < topArr.length; i++) {
  var msg = "My #"+(i+1)+" choice is "+topArr[i];
  console.log(msg)
}

console.log("\nMy top 5 favourite stans using descriptor:");
for (var i = 0; i < topArr.length; i++) {
  var num = '';
  if ((i+1)===1) {
    var msg = num+(i+1)+"st";
    console.log(msg+" choice is "+topArr[i]);
  } else if ((i+1)===2) {
    var msg = num+(i+1)+"nd";
    console.log(msg+" choice is "+topArr[i]);
  } else if ((i+1)===3) {
    var msg = num+(i+1)+"rd";
    console.log(msg+" choice is "+topArr[i]);
  } else if ((i+1)===4 || (i+1)===5) {
    var msg = num+(i+1)+"th";
    console.log(msg+" choice is "+topArr[i]);
  }
}
