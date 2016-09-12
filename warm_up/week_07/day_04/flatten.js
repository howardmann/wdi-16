console.log("Flatten JavaScript");

var reverseArr = function(arr) {
  return arr.reverse();
};

var reverseArrLoop = function(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

var flattenArr = function(arr) {
  return arr.reduce(function(result, el) {
    return result.concat(el);
  }, []);

};

console.log(reverseArr([1, 2, 3]));
console.log(reverseArrLoop([1, 2, 3]));
console.log(flattenArr(["Hello", ["World"]]));
