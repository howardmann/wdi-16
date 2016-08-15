console.log("Video exercise");

var allLinks = document.querySelectorAll("a");
console.log(allLinks);

// Bonus DOM manipulation

// var newA = document.createElement('a');
// newA.setAttribute('src', 'https://www.youtube.com/watch?v=oHg5SJYRHA0');
// newA.innerHTML = "Rick Rolled";
//
// var newLi = document.createElement('li');
// var newLiA = newLi.appendChild(newA);
//
// var ul = document.querySelector("ul");
// ul.appendChild(newLiA);



// for ( var i = 0; i < allLinks.length; i++ ) {
//   var currentLink = allLinks[i]; // Store each a link
//   var href = currentLink.getAttribute('href'); // Create variable with each url link
//   var thumbnail = youtube.generateThumbnailUrl(href); // Access custom JavaScript library to get access to youtube thumbnail
//   var image = document.createElement('img'); // Create new img element
//
//   image.setAttribute('src',thumbnail); // Set image attribute to the custom youtube thumbnail url accessing 3rd party JS library method
//   currentLink.appendChild(image); // Append that image each link
// }

for ( var i = 0; i < allLinks.length; i++ ) {
  var currentLink = allLinks[i];
  var href = currentLink.getAttribute('href');
  var embedUrl = youtube.generateEmbedUrl(href);
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src',embedUrl);
  currentLink.appendChild(iframe);

}
