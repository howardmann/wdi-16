console.log("Objects:\n");

// Introduction to Objects

var person = {
  firstName: "Howie",
  lastName: "Mann",
  gender: "M",
  email: "howardmann27@gmail.com"
};

var msg = "Hi my name is "+person.firstName+" "+person.lastName+" my gender is "+person.gender+" and my email is "+person.email;
console.log(msg);

// Create objects

var emptyObj = {};

var bestMovie = {
  name: "Jaws",
  director: "Steven Spielberg",
  duration: 120
};

var duration = bestMovie.duration;
var name = bestMovie.name;
var director = bestMovie["director"];

console.log(name, director, duration);

// Adding new values

bestMovie.language = "English";
bestMovie.rating = 10;

// Deleting object values

var bestCamera = {
  brand: 'Leica',
  model: 'M3',
  year: '1955',
  memoryCard: 'SD'
};

console.log(bestCamera);
bestCamera.memoryCard = null;
console.log(bestCamera);
delete bestCamera.memoryCard;
console.log(bestCamera);

// for in loop for Objects Note: This approach is rare
//##HM: This is why we use array notation which can access a variable argument such as prop in the example below. Using dot notation wouldn't work
for (var prop in bestCamera) {
  console.log(bestCamera[prop]);
}

//Use Object prototype keys to access the properties of the Object as an array and then calculate length to perform a for loop and console log each of the properties
for (var i=0; i<Object.keys(bestCamera).length; i++) {
console.log(bestCamera[Object.keys(bestCamera)[i]]);
};

// Practice Objects

var bookSeries = {
    name: "In Search of Lost Time",
    author: "Marcel Proust",
    books: [
        "Swann's Way",
        "In the Shadow of Young Girls in Flower",
        "The Guermantes Way",
        "Sodom and Gomorrah",
        "The Prisoner",
        "The Fugitive",
        "Time Regained"
    ]
};

var bookName = bookSeries.name;
var bookAuthor = bookSeries.author;
var allBooks = bookSeries.books;

for (var i=0; i<bookSeries.books.length; i++) {
  console.log(bookSeries.books[i]);
}


// You can access the values of a property using dot notation (object.property) or array notation (object["property"]). Advantage of array notation is it allows you to pass through variables and properties with spaces


// Nested Objects
var explorer = {
    firstName: "Jacques",
    lastName: "Cousteau",
    birth: {
        day: 11,
        month: 6,
        year: 1910
    }
};
var explorerName = explorer["firstName"];
var birthDay = explorer["birth"]["day"];
var birthYear = explorer["birth"]["year"];
console.log(explorerName);
console.log(birthDay);
console.log(birthYear);


// Methods is a function inside an object
// We will build our own method
var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  displayPurpose: function() {
    console.log("Hello world");
  }
};

console.log(explorer.firstName);
console.log(explorer.lastName);
// ##HM: Remember to call the function with (); after you access the function in the object
explorer.displayPurpose();

//Complex Data structures: array with individual object
var marxFamily = [
    { name: "Groucho", birthYear: 1890 },
    { name: "Harpo", birthYear: 1888 },
    { name: "Chico", birthYear: 1887 },
    { name: "Zeppo", birthYear: 1901 },
    { name: "Gummo", birthYear: 1893 }
];

//Find a way to print out name and birthYear each at a Time
for (var i=0; i<marxFamily.length; i++) {
  var printName = marxFamily[i]["name"];
  var printYear = marxFamily[i]["birthYear"];
  console.log(printName+" "+printYear);
}


//THIS (context). We use THIS to avoid variable naming conflicts in code
var jacques = {
  firstName: "Jacques",
  lastName: "Cousteau",
  occupation: "Explorer",
  status: "Legendary",
  displayPurpose: function() {
    console.log("Hello world");
  },
  displayFullName: function() {
    var fullName = this.firstName + " " +this.lastName;
    console.log(fullName);
  },
  displayOccupationAndStatus: function() {
    var msg = this.status+" "+this.occupation;
    console.log(msg);
  }
};

jacques.displayFullName();
jacques.displayOccupationAndStatus();
