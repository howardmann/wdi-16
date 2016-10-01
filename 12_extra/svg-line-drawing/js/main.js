$(document).ready(function(){

  // Gets first pure DOM node from jQuery selection
  var firstPath = $("#svg_2").get(0);
  // getTotalLength() DOM method
  var firstPathLength = firstPath.getTotalLength();

  var secondPath = $("#svg_1").get(0);
  var secondPathLength = secondPath.getTotalLength();

  $('#svg_1').css({
    "stroke-dasharray": secondPathLength,
    "stroke-dashoffset": secondPathLength
  });

  $('#svg_2').css({
    "stroke-dasharray": firstPathLength,
    "stroke-dashoffset": firstPathLength
  });

  $("svg").css("opacity",1);

  $("path").addClass("complete");

  // var render_svg1 = function() {
  //   $("#svg_1").animate({
  //     "stroke-dashoffset": 0
  //   },3000);
  // };
  //
  // $("#svg_2").animate({
  //   "stroke-dashoffset": 0
  // },3000, function(){
  //   render_svg1();;
  // });

});
