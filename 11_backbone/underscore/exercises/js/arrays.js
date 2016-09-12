console.log("Underscore arrays");


var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];


// - Create an array of every five numbers between 30 and 101
var range = _.range(30,101,5);
console.log(range);

// - Turn ` bumpyArr ` into one flat array (no nested arrays)
var flatten = _.flatten(bumpyArr);
console.log(flatten);

// - Remove all of the falsey elements in the ` uncompactedArr `
var compact = _.compact(uncompactedArr);
console.log(compact);

// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `
var union = _.union([ 1, 25, 100 ],[ 1, 14, 25 ],[24, Infinity, -0]);
console.log(union);

// - Find the index of the first element in ` numbers ` that is over 7 and is even
var findIndex = _.findIndex(numbers,function(el){
  return el > 7 && el % 2 === 0;
});
console.log(findIndex);

// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `
var toObject = _.object(arrToTransform[0], arrToTransform[1]);
console.log(toObject);
