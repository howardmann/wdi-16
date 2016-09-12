console.log("Backbone practice");
// Make a new project
// Book
// Create three or four books
// Every time the title is changed, run a function
// The old title was ____, the new title was ____
// Every time anything is changed, run something as well
// Each book should have a set of default values
// Library
// Add all of the books you created
// Add another random book, and then remove it
// Event handlers for adding and removing here
// Muck around with:
// Plucking attributes
// Sorting
// Going through each element in a collection
// Using underscores templates

// CREATE MODEL
var Book = Backbone.Model.extend({
  defaults: {
    title: "N/A",
    author: "N/A",
    price: 0
  },

  initialize: function() {
    this.on("change:title", function(model, newVal) {
      var oldTitle = model.previousAttributes().title;
      var newTitle = newVal;
      var msgString = "The old title was <%=oldTitle%>, the new title is <%=newTitle%>";
      var msg = ({oldTitle: oldTitle, newTitle: newTitle});
      console.log(msg);
    });

    this.on("change", function() {
      console.log("Book was changed");
    });
  }
});

var bookOne = new Book();
bookOne.set({
  title: "Harry Potter",
  author: "JK Rowling",
  price: 29.99
});

var bookTwo = new Book({
  title: "Lord of the Rings",
  author: "JRR Tolkien",
  price: 15.99
});

var bookThree = new Book({
  title: "Bible",
  religious: true
});

// CREATE COLLECTION
var Books = Backbone.Collection.extend({
  model: Book,

  initialize: function() {
    this.on("add", function(model) {
      var bookTitle = model.get("title")
      console.log("\tAdded: " + bookTitle);
    });

    this.on("remove", function(model) {
      var bookTitle = model.get("title")
      console.log("\tRemoved: " + bookTitle);
    });
  }
});

var library = new Books();
library.add([bookOne, bookTwo, bookThree]);
var libraryTitles = library.pluck("title");
console.log(libraryTitles);

library.add([{
  title: "Dianetics",
  religious: true
}, {
  title: "Koran",
  religious: true
}]);

var dangerousBooks = library.where({
  religious: true
});

library.each(function(el) {
  var title = el.get("title");
  var author = el.get("author");
  var price = el.get("price");
  var msg = title + " by " + author + " price is $" + price + ".";
  var msgTemplate = _.template("<%= bookTitle %> by <%= bookAuthor%>, price is $<%= bookPrice %>.");
  var msg = msgTemplate({bookTitle: title, bookAuthor: author, bookPrice: price});
  console.log(msg);
});

var sortPrice = library.sortBy("title");
console.log(sortPrice);

var filterFree = library.filter(function(el){
  return el.get("price") === 0;
});
console.log(filterFree);

library.remove(dangerousBooks);

// //TEMPLATES
// var templateString = "<p> Hello <%= name %>! </p>";
// var template = _.template( templateString );
// var compiledTemplate = template( { name: "Jane" } );
// console.log(compiledTemplate);
//
// // 1. Create a string with erb
// var msgString = "<h1> Book title <%= title %> </h1>";
// // 2. Use underscore _.template method to store string
// var msg = _.template( msgString );
// // 3. Pass in erb instance variable
// var compiledMsg = msg( {title: "What"} );
// console.log(compiledMsg);
//
// var stringT = _.template("<p>Insert your name: <%= name %> </p>");
//
// console.log(stringT({name: "Joe"}));

var erbString = _.template("<p> Hello: <%= name %> <%= surname%></p>");
var joe = erbString({name: "Joe", surname: "Bloe"});
var bob = erbString({name: "Bob", surname: "FOB"});
var jane = erbString({name: "Jane", surname: "lane"});
console.log(joe);
console.log(bob);
console.log(jane);
