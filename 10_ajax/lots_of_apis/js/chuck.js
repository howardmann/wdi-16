console.log("Chuck Norris");
// Reference to all important elements and parts of the API
  var baseChuckURL = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
  var $baseChuck = $('.norris');
  var $baseChuckContent = $baseChuck.find('.content');
  var $chuckStopButton = $baseChuck.find('button');
  var chuckTimer;

// Display api quotes
var displayChuckQuote = function(response) {
  var quote = response["value"]["joke"];
  var $newParagraph = $("<p></p>"); // Create
  $newParagraph.text( quote );  // Manipulate
  $baseChuckContent.prepend( $newParagraph ); // Inject
};

// Fetch api quotes via ajax request
var getChuckQuotes = function() {
  console.log("Fetch api quotes");
  $.ajax({
    url: baseChuckURL,
    type: "GET",
    dataType: "JSON"
  }).done(function(response){
    displayChuckQuote(response);
  });
};

$(document).ready(function(){
// Add event handlers

  chuckTimer = window.setInterval(getChuckQuotes,3000);

  $chuckStopButton.on("click", function(){
    console.log("$clearInterval clicked");
    window.clearInterval(chuckTimer);
  });


});
