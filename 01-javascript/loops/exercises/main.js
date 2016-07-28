//#################
console.log("Even/odd reporter:");

function isEvenOdd (start, end, increment) {
  for (var i =start; i <= end; i+=increment) {
    if (i%2===0) {
      console.log(i+ " is even");
    } else {
      console.log(i+ " is odd");
    }
  }
}

isEvenOdd(0,20,1);


//#################
console.log("\nMultiplication tables:");

var multTable = function (multiple) {
for (var i =0; i<=10; i++) {
  var result = (i*multiple).toString();
  console.log(multiple+" x "+i+" = "+result);
}
};

multTable(9);

//#################
console.log("\nAll times table v1:");

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
      var result = i*j;
      console.log(i+" x "+j+" = "+result);
  }
}

//#################
console.log("\nAll times table v2:");

for (var i=1; i<=10; i++) {
  multTable(i);
}

//#################
console.log("\nGrade Assigner:");

for (var i = 0; i <=100; i++) {
  if (i >= 90) {
    console.log(i+" you got an A");
  } else if (i>=80) {
    console.log(i+" you got a B");
  } else if (i>=70) {
    console.log(i+" you got a C");
  } else if (i>=60) {
    console.log(i+" you got a D");
  } else if (i>=50) {
    console.log(i+" you passed");
  } else {
    console.log(i+" you got an F");
  }

}
