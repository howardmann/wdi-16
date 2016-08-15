console.log("Events and animations");

$(document).ready(function(){
//Pure DOM approach................................

//Event listener for h1 tag
var heading = document.querySelector("h1");

var clickDOM = function() {
  console.log("Heading was clicked on DOM");
};

heading.addEventListener('click',clickDOM);

// Event listener for button tag
var button = document.querySelector('button');
var count = 0;
var clickButtonDOM = function() {
  count++;
  button.innerHTML = count;
};
button.addEventListener('click',clickButtonDOM);

//jQuery approach.................................

//Event listener for h1 tag
var $heading = $('h2');

var clickJQuery = function() {
  console.log("Heading was clicked on jQuery");
}
$heading.on('click',clickJQuery);

//Event listener for button tag
var $button = $('button.jQuery');
var sum = 0;
var clickButtonJQuery = function() {
  sum++;
  $button.html(sum);
};
$button.on('click',clickButtonJQuery);

// Wolf method. Wrap everything into one function
$("button.wolf").on("click", function (event) {
  var $element = $( event.currentTarget );
  var cachedCount = parseFloat( $element.html() );
  var newCount = cachedCount+1;
  $element.html(newCount);
});


//Keyboard jQuery approach.................................

$(document).on("keypress",function(event){
  var pressed = (event.key);
  console.log("A key was pressed:",event.keyCode,pressed);
  $('span').append(pressed);
} );

$(window).on("scroll", function(event){
  var scroll = $(window).scrollTop();
  console.log("page was scrolled. ScrollTop in px: "+scroll);
  var distanceToBottom = scroll+$(window).height();
  console.log("The bottom of your screen is px: "+distanceToBottom);
});


$("p.click").on('click',function() {
  console.log("Clicked");
});

$("p.dblClick").on('dblclick', function(){
  console.log("Double Clicked");
});

$("p.contextMenu").on('contextmenu', function(){
  console.log("Context Menu");
});


// jQuery prevent default action occuring................
// Example stops a tag from opening to href link

$("a").on("click", function(e){
  console.log(e);
  e.preventDefault();
});

// jQuery animate images

$(".toggle").on("mouseover", function(e){
  $(".toggle").toggle();
});

$(".fadeToggle").on("mouseover", function(e){
  $(".fadeToggle").fadeToggle();
});

$(".slideToggle").on("mouseover", function(e){
  $(".slideToggle").slideToggle();
});

$(".animate").on("click", function(e){
  $(".animate").animate({width:"400px"},3000);
  $("body").animate({border:"4px solid black"},100);
});

$(".reload").on("click", function(e){
  $(".toggle").toggle();
  $(".fadeToggle").fadeToggle();
  $(".slideToggle").slideToggle();
});


//jQuery dancing cats

// jQuery animation Syntax
// $(el).animate(cssChange,time,success)

$(".animate").css({position:"fixed",top:0,left:0,width:"100px"});


var goForward = function() {
  $(".animate").animate({
    left: "100%"
  },3000, function(){
    console.log("animation complete");
    goBack();
  });
};

var goBack = function() {
  $(".animate").animate({
    left: "0%"
  },3000, function(){
    console.log("animatin back complete");
    goForward();
  });
};

// Using above in recursive function

// $("img.animate").css({
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100px"
// });
//
// var animateBill = function () {
//   $(".animate").animate({
//     left: "100%"
//   }, 2000, function () {
//
//     $(".animate").animate({
//       left: "0%"
//     }, 2000, function () {
//       animateBill();
//     });
//
//   });
// };
//
// animateBill();


// Animation exercise of navbar
// Adding a class property checks the state of the element, e.g. true or false. In this example:
// 1. Set up body listener with click, with navbar starting false (i.e. no active class)
// 2. If it is false then switch it true by adding a classs
// 3. Set up if statement to check if it is true, if so then move it back

$("body").on("click", function() {

  if ($("nav").hasClass("active")) {

    $("nav").animate({right:"-200px"},1000, function(){
      $("nav").removeClass("active");
    });

  } else {

    $("nav").animate({right:"0px"},1000, function(){
      $("nav").addClass("active");
    });

  }

});

});
