console.log("Ron URL");

// Cache important elements
var $baseRon = $('.swanson');
var $baseRonContent = $baseRon.find('.content');
var $ronStopButton = $baseRon.find("button");
var ronTimer;

// Display api quotes
var displayRonQuote = function(response){
  var quote = response[0];
  var $newParagraph = $("<p></p>"); // Create
  $newParagraph.text( quote );  // Manipulate
  $baseRonContent.prepend( $newParagraph ); // Inject
};

// Fetch api quotes via ajax request
var getRonQuotes = function() {
  console.log("Fetching Swanson quotes...");
  var ronBaseURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
  // Make an ajax request
  $.ajax({
    url: ronBaseURL,    // The URL
    type: "GET",        // The Method
    dataType: "JSON"   // The requested dataType
  }).done(function(response){ // When AJAX request is complete
      // Display the information
      displayRonQuote(response);
  });
};

// Add event handlers
$(document).ready(function(){
  var status = "off";

  $ronStopButton.on("click", function(){
    console.log("window.clearInterval clicked");
    if (status === "off") {
      ronTimer = window.setInterval(function(){
        getRonQuotes();
      }, 1000);
      status = "on";
      return true;
    }
    if (status === "on") {
      window.clearInterval(ronTimer);
      status = "off";
      return true;
    }
  });

});
