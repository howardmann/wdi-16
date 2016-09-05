// console.log("Hello World", jQuery);

// var doFirst = function() {
//
//   window.setTimeout(function(){
//     console.log("Do first");
//   }, 1000);
//
// };
//
// var doSecond = function() {
//   console.log("Do second");
// };
//
// doFirst();
// doSecond();

// var doFirst = function ( callback ) {
//   window.setTimeout(function(){
//     console.log("Do first");
//     callback();
//   },1000);
// };
//
// doFirst(function(){
//   console.log("Do second")
// });

// var totals = [92, 94, 86, 99, 100];
//
// for (var i = 0; i < totals.length; i += 1) {
//   var currentScore = totals[i];
//   console.log(currentScore);
// }
//
// var each = function( collection, callback) {
//   for (var i = 0; i < collection.length; i+=1) {
//     callback( collection[i] );
//   }
// };
//
// each( totals, function( el ){
//   console.log("Current score is " + el);
// });

// callback function principle: the each function is called which triggers the for loop. After each iteration it executes the callback passing in the current colleciton element into the call back function

console.log("The start of main js");

$(document).ready(function(){
  console.log("The page has loaded");

  $("h1").on("click", function(){
    $(this).text( Math.random());
  });

  $("p").each(function(){
    $(this).text(Math.random());
  });

});

console.log("The end of main js");
