//## Javascript variable naming conventions

/*
var letters: for common variables
var $jQuery: for jQuery objects
var _underscore: for hidden, private and constant variables. Tell programmers not to change
*/

//## Built in methods for converting strings to intgers and vice versa

parseInt("1");
// 1

parseFloat("1.1");
// 1.1

("1").toString();
// 1

//## Rule for defining functions: Always use function expressions not function declarations. REASON: Function declarations are hoisted to the top and can make code unreadable and difficult to follow, while functione expresisons starting with var will execute down the sheet and be more readable

var funcExpression = function () {
  // do code
};
