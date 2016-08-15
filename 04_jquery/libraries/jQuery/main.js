console.log("jQuery practice");

// Step by Step:
//
// - Create an array of every link on the page using document.querySelectorAll(cssSelector)
// - Iterate through the array. In each iteration of the loop:
// - Find the current href using element.getAttribute(name), and store into a variable
// - Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// - Create an IMG element using document.createElement(tagName)
// - Set the "src" of the IMG element using element.setAttribute(name, value)
// - Append the IMG to the link using element.appendChild(element)


var $newLink = $("<li><a href='https://www.youtube.com/watch?v=oHg5SJYRHA0'>The Rick Rolled</a></li>");
$('ul').append($newLink);

$('a').each(function () {
  var link = $(this).attr("href");
  var thumbnail = youtube.generateEmbedUrl(link);
  $(this).append('<iframe src='+thumbnail+'>');
});



// Badger solution


// Terminal shortcut for downloading jQuery library
// curl https://code.jquery.com/jquery-3.1.0.min.js > jQuery.js
