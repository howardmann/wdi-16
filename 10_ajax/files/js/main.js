console.log("files js");

// Define any variables you need to access in browser console outside of document.ready scope and set variable equal to null
var loadLorem = null;
$(document).ready(function() {

  var $content = $('.content');
  var $h1 = $('h1');

  // load syntax : .load('file path', callback);
  // Note: callback happens synchronously after the text has loaded
  loadLorem = function() {
    $content.load('../lorem.txt', function(){
      console.log("lorem ipsum has been loaded");
      console.log($content.html());
    });

  };
  // loadLorem();
  $h1.on('click', loadLorem);

});
