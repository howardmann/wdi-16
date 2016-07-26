// If numOne > numTwo print numOne else print numTwo

console.log("What number's bigger:");

var numOne = 10;
var numTwo = 20;

if (numOne > numTwo) {
  console.log(numOne);
} else {
  console.log(numTwo);
}

//If language = English print Hello World, if language = spanish print Hola Mundo if language = chinese print ni hao shi jie if language = portugese print Ola Mundo default

console.log("\nThe World's translator");

var language = "chinese";

switch (language) {
  case "chinese":
    console.log("Ni Hao Shi Jie");
    break;
  case "spanish":
  case "catalan":
  case "portugese":
    console.log("Ola/ Hola Mundo");
    break;
  case "computer":
    console.log("72 101 108 108 111 32 87 111 114 108 100");
    break;
  default:
    console.log("Hello World");
}

//If score above 90 A, if between 70-90 B, if between 60-70 C if between 50-60 D if below 50 F
console.log("\nThe Grade Assigner");

var score = 20;

if (score>90) {
  console.log("A");
} else if (score>70 && score <= 90) {
  console.log("B");
} else if (score >60 && score <= 70) {
  console.log("C");
} else if (score >50 && score <= 60) {
  console.log("D");
} else {
  console.log("F");
}

// If num > 1 add to string "s"
console.log("\nThe Pluralizer");

var noun = "Goose";
var num = 2;

if (noun.endsWith("y") && (num !== 1)) {
  var str = noun.slice(0,-1);
  console.log(num+" "+str+"ies");
} else if(noun.indexOf('oo')!==-1 && num >1) {
  var nounMod = noun.replace(/oo/i,'ee');
  console.log(num+" "+nounMod);
} else if(noun.indexOf('ee')!==-1) {
  console.log(num+" "+noun);
} else {
  if (num>1) {
  console.log(num+" "+noun+"s");
  } else {
  console.log(num+" "+noun);
  }
}
