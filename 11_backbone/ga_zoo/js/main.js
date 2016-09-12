// // We need to create the blueprint
//   // We do this by extending Backbone's core components
//
// // Extend is a underscore tool which allows us to pass in key value pairs into the Model object
//
// // Very similar to Ruby classes and instances
// var Movie = Backbone.Model.extend({
//   // Set default values on initialization use NA for empty string
//   defaults: {
//     title: "N/A",
//     duration: 0,
//     director: "N/A"
//   },
//
//   initialize: function() {
//     console.log("You just created a new movie");
//
//     // Event listener for changes on any value
//     this.on("change",function(){
//       console.log("Something changed");
//     });
//
//     // Specific event handler using syntax :
//     // When change occurs targetted at :title key run code
//     this.on("change:title", function(model, newTitle){
//       // Above, takes two arguments, first is the model that changed and second is what value changed for :title
//
//       // Backbone method to access previousAttributes object in model and its property "title"
//       // .previousAttributes() acceesses previous object
//       var oldTitle = model.previousAttributes().title;
//       var msg = "The old title was " + oldTitle + ", the new title is " + model.get("title");
//       console.log(msg);
//     });
//
//     // Listen for multiple changes. Event listener on Movie model for changes in its default property duration and director
//     this.on("change:duration change:director", function(){
//       console.log("Either the duration or the director changed");
//     });
//
//   }
// });
//
// // Create a peice of data using that blueprint
// var genericMovie = new Movie();
// console.log(genericMovie);
//
// var bestMovie = new Movie({
//   title: "Satantango",
//   director: "Bela Tarr",
//   duration: 450
// });
//
// // Get is similar to Ruby way of accessing value of variable
// // HM The key here is relying on Backbone's getters and setters which we could access directly with ActiveRecord in ruby. Just rmember to use get method to see and set method to change
// var movieTitle = bestMovie.get("title");
// var movieDirector = bestMovie.get("director");
// var movieDuration = bestMovie.get("duration");
//
// console.log(bestMovie);
// console.log(movieTitle);
// console.log(movieDirector);
//
// // Get value of instance variable in JSON object
// var regularBestMovie = bestMovie.toJSON();
// console.log(regularBestMovie);
//
// var almostBestMovie = new Movie({
//   title: "Satan"
// });
//
// // Set similar to jQuery css setters
// almostBestMovie.set({
//   title: "Satantango",
//   director: "Bela Tarr",
//   duration: 450
// });
// console.log(almostBestMovie.toJSON());
//
// almostBestMovie.set({
//   change: "recent change"
// });
//
// var mostRecentChanges = almostBestMovie.changedAttributes();
// console.log(mostRecentChanges);
//
// // CREATING COLLECITONS
// var Movies = Backbone.Collection.extend({
//   //HM This is important. It is the Rails equivalent of has_many :movies
//   model: Movie,
//
//   initialize: function() {
//     console.log("A new collection of movie was created");
//
//     // COLLECTION EVENT HANDLERS
//     // Event handler when an event is added
//     this.on("add", function(){
//       console.log("A movie was added");
//     }); // collection.add( model ) or collection.add([modelOne, modelTwo])
//
//     this.on("remove", function(){
//       console.log("A movie was removed");
//     }); // collection.remove( model ) or collection.remove([modelOne, modelTwo])
//
//   }
// });
//
// var movies = new Movies();
//
// var movieOne = new Movie();
// var moviesWithOne = new Movies(movieOne);
//
// var movieTwo = new Movie();
// var movieThree = new Movie();
// var multipleMovies = new Movies([movieTwo, movieThree]);
// console.log(multipleMovies);
//
// var moviesWithObj = new Movies({
//   title: "The Man who knew Infinity"
// });
// console.log(moviesWithObj);
//
// // ADDING MODELS TO COLLECTIONS
// // HM: We use the Backbone 'add' method when we are pushing a new model into the Collection model array
// var ourNewCollection = new Movies();
// ourNewCollection.add({});
//
// var movie = new Movie();
// ourNewCollection.add(movie);
// console.log(ourNewCollection);
//
// // REMOVING MODELS FROM COLLECTIONS
// var ourMixedCollection = new Movies([
//   {quality: "Poor"},
//   {quality: "Poor"},
//   {quality: "Poor"},
//   {quality: "Good"},
//   {quality: "Good"}
// ]);
//
// console.log(ourMixedCollection);
// console.log(ourMixedCollection.pluck("quality"));
//
// // To remove models from collecitons two step:
//   // 1. create a new variable of what we want to remove
//   // 2. Then remove from original collection
// var poorMovies = ourMixedCollection.where({
//   quality: "Poor"}
// );
// console.log(poorMovies);
// ourMixedCollection.remove(poorMovies);
// console.log(ourMixedCollection);
//
// // GETTING MODEL DATA FROM COLLECTIONS
// var moviesWithIDs = new Movies([
//   {id: 300, title: "Toy Story"},
//   {id: 400, title: "Power Flower"}
// ]);
//
// moviesWithIDs.add([
//   {id: 200, title: "Satantango"},
//   {id: 100, title: "Frozen"}
// ]);
//
// // We use 'get(id)' which is the same as activerecord find(id)
// var twoHundy = moviesWithIDs.get(200).toJSON();
// console.log(twoHundy);
//
// // We use at method to retrieve by index
// var first = moviesWithIDs.at(0).toJSON();
// console.log(first);
//
// // We can use findWhere which is the same as find_by in activerecord
// var frozen = moviesWithIDs.findWhere({title:"Frozen"}).toJSON();
// console.log(frozen);
//
//
// // Adding multiple models
// var myMovies = new Movies(); // Create new collection of Movies called myMovies
// var movie = new Movie(); // Create a new Movie model
// myMovies.add([ {}, {}, {}, movie ]); // Add four models to the collection including variable
//
// myMovies.remove(movie); // Remove specific movie
// console.log(myMovies.length); // Reduces to 3
//
// var anonymousMovies = myMovies.where({title: "N/A"});
// console.log(anonymousMovies);
// myMovies.remove(anonymousMovies);
// console.log(myMovies.length);

var Animal = Backbone.Model.extend({
  defaults: {
    stripes: 0,
    living: true,
    ecosystem: "",
    type: 'animal'
  },

  initialize: function() {
    console.log("A new animal was created");

    this.on("change", function(){
      console.log("An attribute was changed");
    });

    this.on("change:type", function(){
      console.log("The type was changed");
    });
  }
});

// var animal = new Animal({
//   stripes: 100
// });
// console.log(animal.toJSON());
var kangaroo = new Animal();
kangaroo.set({
  ecosystem: "Plains",
  pouch: true,
  tail: true
});

kangaroo.set({
  type: "Giant Kangaroo"
});

var kangarooAttributes = kangaroo.toJSON();
console.log(kangarooAttributes);
console.log(kangaroo);

var butterfly = new Animal({
  type: "Monarch"
});

var badger = new Animal({
  type: "Badger",
  living: false
});

var panda = new Animal({
  type: "Panda",
  living: false,
  id: 10
});

panda.set("type","wow")

// Create a collection blueprint  = for Animals
var Animals = Backbone.Collection.extend({
  model: Animal,

  initialize: function() {
    this.on("add", function(newAnimal){
      console.log("a Animal model was added to the Animals collection");
      console.log("\tIt was a "+newAnimal.get("type"));
    });

    this.on("remove", function(animal){
      console.log("a Animal model was removed to the Animals collection");
      console.log("\t"+animal.get("type")+" was removed");
    });
  }
});

// Create a zoo
var zoo = new Animals();

// Add animals to the zoo
zoo.add([badger, panda, butterfly]);
console.log(zoo.length);
var typeArr = zoo.pluck("type");
console.log(typeArr);

// zoo.remove(badger);
// console.log(zoo.length);

// var dead = zoo.where({living:false});
// console.log(dead);
// zoo.remove(dead);

// Print out each title using underscore methods
zoo.each(function(animal){
  console.log(animal.get("type"));
});

var allTypes = zoo.pluck("type");
console.log(allTypes);

var sortAnimals = zoo.sortBy("type");
console.log(sortAnimals);


// Filter where animal word length > 5
var long = zoo.filter(function(animal){
  return animal.get("type").length > 5;
});
console.log(long);


// WOLF: Single Page Applications (SPA)
  // Represent the same stuff that our Rails views would do
var ZooView = Backbone.View.extend({
  el: "#app",

  events: {
    'click h1' : 'clickHeading',
    'click li' :'accessAnimal',
    'click span' : 'destroyAnimal'
  },

  clickHeading: function() {
    console.log("the heading was clicked");
  },

  accessAnimal: function( event ) {
    //HM: IMPORTANT: This is important for selecting the current element with a jQuery selector. If you don't select the el then 'this' will reference the entire view instance
    var $currentEl = $( event.currentTarget );
    console.log(event.currentTarget);
    $currentEl.css({color: "red"});
  },

  destroyAnimal: function( event ) {
    // HM: This is garbage collection. We need to remove this from the Backbone model rather than just removing the html
    // Steps: Get the text from the span clicked and then search for the model within the colleciton using findWhere. Finally remove it
    var $span = $( event.currentTarget );
    var $li = $span.parent();
    var txt = $li.text();

    var searchTerm = txt.replace(" | Delete", "");
    var toBeDestroyed = this.collection.findWhere({type: searchTerm});
    this.collection.remove(toBeDestroyed);
  },

  initialize: function(){
    console.log("A new view was created");

    // Event handlers go here
    // .listenTo is a Backbone event listner that takes four args .listenTo(model, 'change', callback)
    // Alternative: this.collection.on('add', this.render)
    this.listenTo(this.collection, 'add', this.render);
    // For removing listener
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function(){
    console.clear();
    console.log("The current view: ", this);
    var appEl = this.$el;
    appEl.html("<h1> The animals in our zoo</h1>");

    var $ul = $("<ul></ul>");
    this.collection.each(function(animal){
      var $li = $("<li></li>");
      $li.text(animal.get("type"));
      var $span = $("<span> | Delete</span>");
      $li.append($span);
      $ul.append($li);
    });

    console.log(this.$el);
    this.$el.append($ul);
  }
});


// // Execute code
// var zv = new ZooView({
//   collection: zoo
// });
// zv.render();
//
// var animal = zoo.findWhere({type: "wow"});
// // zoo.remove(animal);


// Models - represent one resource(one record in User table)
// Collections - represent mutipled resources (all users)
// Views - represent a colleciton or model
// Routers - control which views are represented at a given time

// Create a Backbone Router
var Router = Backbone.Router.extend({
  routes: {
    '': 'showZoo', // Either no hash or a hash with nothing after it
    'animals/:id': 'showAnimal' // #animals/:id HM: remember to acceess the url we need to reference the #
  },

  showAnimal: function(id){ // Remember the arg represenst the params of waht was passed in to the id url. id is the equiavalent of params[:id]
    $("#app").html("<h1>Showing the animal with id of " + id + "</h1>");
  },

  showZoo: function(){
    var zv = new ZooView({
      collection: zoo
    });
    zv.render();
  }
});

console.clear();

var router;
$(document).ready(function(){
  router = new Router(); // Only listens for client-side urls #

  // Built in backbone method which starts listening for all router requests. Backbone will start paying attention to the hash fragments
  // HM: this is something we have to do after instantiating a new router. See Backbone language below:
  // During page load, after your application has finished creating all of its routers, be sure to call Backbone.history.start() to route the initial URL.
  Backbone.history.start();


});

// HM: Navigate is important, this is a Backbone built-in method which we call on the router instance to go the url, think of this as the equivalent of our a href tag. We cannot use a tags so we must use navigate. Just remmeber that for it to work we must set the second argument as an option with trigger: true
var goHome = function() {
  router.navigate("/", {
    trigger: true
  });
};

var goSeeAnAnimal = function(id) {
  router.navigate("/animals/"+id, {
    trigger: true
  });
};
