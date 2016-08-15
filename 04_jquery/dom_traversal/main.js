console.log("DOM traversal practice");



// Select first heading and add class of hot
$('h2').first().addClass('hot');

// Select all headings and add color of grey and blue border underline
$(':header').css({color:"#d3d3d3",borderBottom:"1px solid blue"});
// Select second heading and add class of cool
$('h2').eq(1).addClass('cool');
// Select List item 3 and add class of warm
$('li').first().next().next().addClass('warm');

// Select sublist item 2 and add class of cool
$('ul>ul').children().eq(1).addClass('cool');

// Add click event listener to all list items and fadeToggle

$('li').on('click', function(){
  $(this).fadeToggle(500);
});

// Add event listener to all sub-list items and add class of hot

$('ul>ul>li').on('click',function(){
  $(this).addClass('hot');
})

// Add event listener on all p tags and increase fontSize of closest h2

$('p').on('click',function(){
  $(this).prev('h2').toggleClass('big');
});


// Add event listener on  h1 to toggle class warm
$('h1').first().on('click', function() {
  $(this).toggleClass('cool');
});
