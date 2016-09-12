console.log("Objects");

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// - Multiply each value in ` objectToMap ` by a random number and return an object with the changed values
var multiplyObj = _.mapObject(objectToMap, function(val,key){
  return val * _.random(1,11);
});
console.log(multiplyObj);

// - Get an array version of ` objectToMap ` that looks like this - ` [["start", 100], ["middle", 853], ["end", 912]] `
var arrayVersion = _.pairs(objectToMap);
console.table(arrayVersion);

// - Flip ` objectToMap ` around so that it looks like this - ` { "100" : "start", "853" : "middle", "912" : "end" } `
var flip = _.invert(objectToMap);
console.log(flip);

// - Remove the "start" key from ` objectToMap ` in two different ways
var omit = _.omit(objectToMap, "start");
console.log(omit);

var pick = _.pick(objectToMap, "middle", "end");
console.log(pick);

var defaults = _.defaults(objectToMap, {default: true});
console.log(defaults);
