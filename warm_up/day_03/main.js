console.log("Day 3 warm-up exercise");

// If divisible by 3 print Pling, if divisible by 5 print Plang if divisible by 7 print Plong. Otherwise print number

//Long way of doing it

for (var num = 1; num <= 10; num++) {

  if (num%3===0 && num%5===0 && num%7===0) {
    console.log("PlingPlangPlong");
  }
  else if (num%3===0 && num%5===0) {
    console.log("PlingPlang");
  } else if (num%3===0 && num%7===0) {
    console.log("PlingPlong");
  } else if (num%5===0 && num%7===0) {
    console.log("PlangPlong");
  } else if (num%3===0) {
    console.log('Pling');
  } else if (num%5===0) {
    console.log('Plang');
  } else if (num%7===0) {
    console.log('Plong');
  } else {
    console.log(num);
  }

}

console.log("BREAK\n");


// Find a better way without writing first three lines of code

  var num = 2;
  var string = "";

  if (num%3===0) {
    string+="Pling";
  }

  if (num%5===0) {
    string+="Plang";
  }

  if (num%7===0) {
    string+="Plong";
  }

  console.log(string || num.toString());
