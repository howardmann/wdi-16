// console.log("Hello World");
//
// // readyState references the numbers (0..4). 0: thinking of calling Badger (new XMLHttpRequest()), 1. typing the numbers (request.open), 2. making the call (request.send), 3. badger responds but hasnt finished the sentence, 4. understand badgers response


// 1. Establish a new XHR request
var request = new XMLHttpRequest();
// 2. Establish a new XHR request
request.onreadystatechange = function() {
  var readyState = request.readyState;
  console.log("The readystate is now: " + readyState);
  if (readyState === 4) {
    var resultsAsString = request.responseText;
    var resultsAsObject = JSON.parse(resultsAsString);
    console.log(resultsAsString);
    console.log(resultsAsObject);
  }
};
// 3. Establish request and url: request.open( HTTP method, url)
request.open("GET", "http://omdbapi.com?t=Satantango");
// 4. Send the request
request.send();


// HM: request.responseText comes back as a string from XHR


// Using vanilla JS and DOM. For HW suggest using jQuery
window.onload = function() {

  console.log("Hello World");

  // XHR AJAX query
  var result = "chicken";
  var btn = document.querySelector("button");
  var title = document.querySelector(".title");
  var poster = document.querySelector(".poster");

  var searchOMDB = function(search) {
    var request = new XMLHttpRequest();
    var readyState = request.readyState;
    console.log("The readystate is now: " + readyState);
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        result = JSON.parse(request.responseText);
        title.innerHTML = "Title: "+ result["Title"];
        poster.setAttribute("src",result["Poster"])

        console.log(result["Title"]);
        console.log(result["Poster"]);
      }
    };
    var url = "http://omdbapi.com?t=" + search;
    request.open("GET", url);
    request.send();
  };


  btn.addEventListener("click", function() {
    // Cache input search value
    var search = document.querySelector(".search").value;
    searchOMDB(search);
    console.log(result);
    console.log("clicked");
  });


}

// Find the value of the input
// Make an XHR request asking for information about a particular movie
// Once data comes back represent the movie on the page
