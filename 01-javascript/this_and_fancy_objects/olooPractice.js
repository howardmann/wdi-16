console.log("OLOOs practice");

var Human = {
  mammal: true,
  species: "Homosapien",
  mortal: true,
  alive: true,
  stabbed: function() {
    this.alive = false;
  }
};


var Male = Object.create( Human );
Male.gender = 'male';
Male.multiTask = false,
Male.search = function(item) {
    console.log("Cursory glance: Nope, didn't find any "+item);
};

var Female = Object.create( Human );
Female.gender = 'female';
Female.multiTask = true,
Female.search = function(item) {
  console.log("Proper search: Found it "+item);
};

var joe = Object.create( Male );
joe.name = "joe";
joe.favColor = "blue";
joe.nature = "Mean spirited";
joe.favMovies = ["Casablanca","Notebook","Scream"];
