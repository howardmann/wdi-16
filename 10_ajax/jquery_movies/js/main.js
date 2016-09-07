console.log("Hello");

// Create ajax done promise callback which uses repsonse data to manipulate html on page
var displayMovie = function(response) {
  // Cache jQuery variables are manipulating
  var $title = $('h2#title');
  var $plot = $('p#plot');
  var $poster = $('img#poster');
  var $body = $('body');

  $title.text(response["Title"]);
  $plot.text(response["Plot"]);
  $poster.attr("src",response["Poster"]);

  $body.css({
    backgroundImage: "url(" + response["Poster"] + ")"
  });

};

// Define non-DOM related things outside of document ready to make sure they are accessible from the console
// Callback function to make the AJAX call if the search term is valid. We define it outside of scope in order to access it in the console
var searchOMDB = function(searchTerm) {
  // Set the main url for the api
  var baseURL = "http://omdbapi.com?";
  // HM: syntax here is important, follow the convention
  // Pass in configuration options into ajax request as object
  $.ajax({
    url: baseURL,     // Main URL defined above
    type: "GET",      // Method
    dataType: "JSON", // Data format
    data: {           // All search params
      t: searchTerm,
      plot: "full"
    }
  }).done(function(response){ // Call displayMovie pasing in all params that jQuery provides
    displayMovie(response);
  });
};

// Wait until every element has completed loading
$(document).ready(function(){
  // Cache jQuery selected elements
  var $form = $('form');
  var $searchField = $('input#search');

  // Select the form and when the user hits submit or enter run this callback
  // Form submit function purpose is to check if search term is valid, if valid it then passes to a new function searchOMDB which makes the AJAX call
  $form.on("submit", function(e){
    // Stops browser from default reloading
    e.preventDefault();
    var searchValue = $searchField.val();
    // Make sure that there is something to search for
    if (searchValue === "") {
      return false;
    }
    // Reference searchOMDB callback which is outside of the console
    searchOMDB(searchValue);
  });
});
