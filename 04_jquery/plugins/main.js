console.log("Example lightbox plugin");

$(document).ready(function(){

  var $p = $('p');
  $p.css({'backgroundColor': 'gainsboro'});

  var clicked = function() {
    $(this).fadeToggle(1000);
  };

  $p.on('click', clicked);

  var genEl = function(){
    var $newPara = $("<p>");
    $newPara.html("Generated");
    $newPara.attr('class',"new-para");
    $newPara.appendTo('.container');
  };

  // Second argument after click, narrows down element within the on click event element. This is important when elements are created after event handlers have been assigned
  $('.container').on('click','p',genEl);

  var chain = function() {
    $(this).css({"borderWidth": "10px","padding":"15px","backgroundColor":"hotpink"}).html("modified").animate({"fontSize":"50px"},2000);
  };

  $('.container').on('click', '.new-para',chain);

  $.colorbox({html:"<h1>Welcome</h1>"});


});
