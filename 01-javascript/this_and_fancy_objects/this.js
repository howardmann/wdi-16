console.log("This and fancy objects");

// Global Binding => Binds this to window if there is no immediate object it belongs to
// Implicit Binding => Binds to the nearest object

console.log( this );


var addTwoNumbers = function() {
  console.log( this ); //=> will refer to global window because addTwoNumbers is not an Object it is a function. You can test this by consoling typeof addTwoNumbers => "function"
};

// If there is not a defined Object in front of this then it will always refer to global window

var person = {
  name: "Groucho",
  speak: function() {
    console.log( this );
    console.log("Hello, I'm Groucho");
  }
};

person.speak();
console.log(person.name);

// IMPLICIT BINDING
var harpo = {
  name: "Harpo",
  speak: function() {
    console.log("Hello, I'm "+this.name);
  }
};


harpo.speak();

var chico = {
  name: "Chico",
  speak: function() {
    console.log("Hello, I'm "+this.name);
  }
};

chico.speak();

// IMPLICIT BINDING EXAMPLE

var satantango = {
  type: "Movie",
  name: "Satantango",
  duration: 432,
  director: "Bela Tarr",
  displayDetails: function() {
    console.log(this.type);
    console.log(this.name);
    console.log(this.duration);
    console.log(this.director);
  }
};
satantango.displayDetails();

// EXPLICIT BINDING EXAMPLE

var sayHello = function() {
  // console.log( this );
  console.log("Hello I am "+this.name);
};

var person1 = {
  name: 'Groucho',
  sayHello: function() {
    console.log( this );
  }
};
var person2 = {
  name: 'Harpo'
};
var person3 = {
  name: 'Zeppo'
};


//##HM .call method is only used on functions
sayHello(); // => Global Binding
person1.sayHello(); // => Implicit Binding
sayHello.call(person1); // => Explicit Binding
sayHello.call(person2); // => Explicit Binding
sayHello.call(person3);
sayHello.call(satantango);

var displayDetails = function() {
  console.log( this.name );
};

// => Explicit Binding
displayDetails.call(person1);
displayDetails.call(person2);
displayDetails.call(person3);
displayDetails.call(satantango);
displayDetails.call(chico);
displayDetails.call(harpo);

// BIND method over two methods
// person1SaysHello has to be a function

var person1SaysHello = sayHello.bind( person1 );
person1SaysHello();

var personTwoSaysHi = sayHello.bind( person2 );
personTwoSaysHi();

var randomPersonSaysHi = sayHello.bind( {name: "Anyone"});
randomPersonSaysHi();


// Exercises

var explicitAddTwoNumbers = function () {
  var result = this.numOne + this.numTwo;
  console.log(result);
  return result;
};

var firstSet = {
  numOne: 5,
  numTwo: 8
};

var secondSet = {
  numOne: 5,
  numTwo: 11
};

var thirdSet = {
  numOne: 7,
  numTwo: 11
};

var fourthSet = {
  numOne: 8,
  numTwo: 11,
  explicitAddTwoNumbers: function() {
    var result = this.numOne + this.numTwo;
    console.log(result);
    return result;
  }
};

// Exercise: Call explicitAddTwoNumbers in three different ways

// Explicit using call method
explicitAddTwoNumbers.call(firstSet);

// Explicit using bind method
var sumSecondSet = explicitAddTwoNumbers.bind(secondSet);
sumSecondSet();

// Explicit using apply method
explicitAddTwoNumbers.apply(thirdSet);

// Implicit method
fourthSet.explicitAddTwoNumbers();


//Difference between using call vs apply methods
//Syntax for call theFunction.call(objForThis, arg1, arg2, arg3)
//Syntax for apply theFunction.call(objForThis, ['arg1','arg2','arg3'])


var theFunction = function(profession, location) {
  console.log("My name is "+this.name+" and I am a "+profession+" living in "+location);
};

theFunction("Wolf");
theFunction.call(person1,"teacher","Sydney");
theFunction.apply(person2,["comedian","Austria"]); // Works for arrays
theFunction.call(person2,["comedian","Austria"]); // => Won't work


// Find max number in an array. Avoid using ...
var arrOfScores = [1,2,3,4,5];
console.log(Math.max.apply(Math,arrOfScores));


//## NEW BINDING. CONSTRUCTORS

var Person = function (name, job) {
  this.name = name;
  this.job = job;

  this.eat = function() {
    console.log( this.name + " is currently eating ");
  };
  this.drink = function() {
    console.log( this.name + " is currently drinking ");
  };
  this.work = function() {
    console.log( this.name+ " is a "+ this.job );
  };
  return this; // => We use this to give the new person object the ability to access the .this function from the master Person constructor
};

var billMurray = Person("Bill Murray"); // => Without new references this to global binding of window !! Avoid this in code because it assigns it to the global window object
var billMurray = new Person("Bill Murray", "actor"); // => By including new it firstly creates a new empty object which .this can be bound to
billMurray.eat();
billMurray.drink();
billMurray.work();
var badger = new Person("Badger", "teacher");
badger.eat();
badger.drink();
badger.work();

// How do we figure out what  `this` is?

// 1. Is there a .call, .apply, or .bind evident? Explicit binding
//    If so, `this` is equal to whatever was passed in

// 2. Is the new keyword evident before the function name? new binding
//    If so, `this` is equal to a new, empty object

// 3. If the function a method on an object?
//    If so, `this` will be the object in question
// Otherwise, `this` will be the window


// FACTORY CONSTRUCTOR
// Similar to new binding constructor but without new and this

// User - name, gender, email
//  Admin - all user, plus admin (true), postArticle (method, log you print out)

var UserFactory = function(name, gender, email) {
  var user = {};
  user.name = name;
  user.gender = gender;
  user.email = email;
  return user;
};

var Admin = function(name, gender, email) {
  var admin = UserFactory(name, gender, email);
  admin.access = true;
  admin.postArticle = function() {
    console.log("Artlce posted");
  };
  return admin;
};

var joe = Admin("joe","m","@email.com");


// OLOO: OBJECTS LINKED TO OTHER OBJECTS

var Vehicle = {
  type: "Vehicle",
  transport: true,
  makeMove: function () {
    console.log("currently moving");
  }
};

Vehicle.makeMove();

var Car = Object.create( Vehicle );
Car.brand = "Jag";
Car.year = 1963;
Car.type = "E-type mk 3";
Car.noteForBadger = function() {
  console.log("Great end of course present, buddy");
};
