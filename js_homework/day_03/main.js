//## Calculator part 1
console.log("THE CALCULATOR - Part 1:");

var squareNumber = function(num) {
  var result = num*num;
  var msg = "The result of squaring the number "+num.toFixed(2)+" is "+result.toFixed(2);
  console.log(msg.toString());
  return result;
};
squareNumber(3);

var halfNumber = function(num) {
  var result = num/2;
  console.log("Half of "+num.toFixed(2)+" is "+result.toFixed(2));
  return result;
};
halfNumber(5);


var percentOf = function(num, den) {
  var result = (num/den*100).toFixed(2)+"%";
  var msg = num.toFixed(2)+" is "+result+" of "+den.toFixed(2);
  console.log(msg);
  return result;
};
percentOf(2,4);

var areaOfCircle = function(radius) {
  var pi = Math.PI;
  var result = pi*radius*radius;
  var msg = "The area for a circle with a radius of "+radius.toFixed(1)+" is "+result.toFixed(2);
  console.log(msg.toString());
  return result;
};
areaOfCircle(2);

//## Calculator part 2
console.log("\nTHE CALCULATOR - Part 2:");

var command = function(num) {
  var half = halfNumber(num);
  var square = squareNumber(half);
  var area = areaOfCircle(square);
  var output = percentOf(area,squareNumber(area));
  return output;
};
console.log(command(10));

//## STRINGS DrEvil
console.log("\nSTRINGS: DrEvil");

var drEvil = function(amount) {
  var str = '';
  if (amount >= 1000000) {
    str = amount+" dollars (pinky)";
  } else {
    str = amount+" dollars";
  }
  console.log(str);
  return str;
};
drEvil(10);
drEvil(500);
drEvil(1000000);
drEvil(2000000);

//## STRINGS MixUp
console.log("\nSTRINGS: MixUp");

var mixUp = function(A,B) {
  var sliceA = B.charAt(0)+B.charAt(1)+A.slice(2); // using string.charAt(i)
  var sliceB = A[0]+A[1]+B.slice(2); // using array position
  console.log(sliceA+" "+sliceB);
};
mixUp("mix", "pod");
mixUp("dog", "dinner");

//## STRINGS FixStart
console.log("\nSTRINGS: FixStart");

var fixStart = function(string) {
  var re = new RegExp(string[0],'gi');
  var end = string.slice(1);
  var fixEnd = string[0]+end.replace(re,"*");
  console.log(fixEnd);
  return fixEnd;
};
fixStart('babble');
fixStart('abacadabra');
fixStart('oompaloompa');

//## STRINGS Verbing
console.log("\nSTRINGS: Verbing");

var verbing = function(string) {
  if (string.endsWith("ing")) {
    var msg = string+"ly"
    console.log(msg);
  } else if (string.length>=3) {
    var end = string[string.length-1];
    var msg = string+end+"ing";
    console.log(msg);
  }
};
verbing('swim');
verbing('swimming');
verbing('win');
verbing('seeming');

//## STRINGS Not Bad
console.log("\nSTRINGS: Not Bad");

var notBad = function(string) {
  var notIndex = string.indexOf('not');
  var badIndex = string.indexOf('bad');

  if (notIndex !== -1 && badIndex !== -1) {
      if (notIndex < badIndex) {
          var str = string.slice(0,notIndex);
          var msg = str+"good!";
          console.log(msg);
          return msg;
      }
  }
  console.log(string);
  return string;
};

notBad("This dinner is not that bad!");
notBad("This movie is not so bad!");
notBad("This dinner is not bad!");
notBad("This movie is not as bad as I thought!");
notBad("This dinner is bad!");
notBad("I will not recommend this movie!");
