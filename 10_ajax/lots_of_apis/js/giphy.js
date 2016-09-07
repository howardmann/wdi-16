console.log("Giphy");
// Select important url and html elements
var baseGiphyURL = "http://api.giphy.com";
var API_KEY = "dc6zaTOxFJmzC";
var $baseGiphy = $('.giphy');
var $baseGiphyContent = $baseGiphy.find('.content');
var $giphySearchButton = $baseGiphy.find("button");
var $giphySearchInput = $baseGiphy.find("input");
var $giphyImg = $baseGiphyContent.find('img#content');

// Display api response within html elements
var displayGiphy = function(response) {
  var image = response["data"]["image_original_url"];
  $giphyImg.attr("src",image);
};

// Fetch api response
var fetchGiphy = function(searchTerm){
  var params = {
    api_key: API_KEY,
    tag: searchTerm
  };

  $.ajax({
    url: baseGiphyURL + "/v1/gifs/random",
    type: "GET",
    dataType: "JSON",
    data: params
  }).done(function(response){
    displayGiphy(response);
  });
};

// Event listener to trigger fetch
$(document).ready(function(){

  $giphySearchButton.on('click',function(){
    var searchTerm = $giphySearchInput.val();

    if (searchTerm === "") {
      console.log("No search value");
      return false;
    }
    fetchGiphy(searchTerm);
  });

});
