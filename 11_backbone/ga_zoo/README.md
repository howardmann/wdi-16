## HM class notes
- Model represents an instance of a model i.e. user = User.first
- Collections represents a group of individual models e.g. could be users = User.all or custom collection

## MODELS
- A Backbone model is similar to a Ruby instance variable for example @user = User.first

# Setup
1. To create a Model in Backbone we first instantiate it by referencing the Backbone.Model object prototype and using the Underscore extend method to pass in more properties to the Model prototype
  `var User = Backbone.User.extend({ object: {key, value}, method: function(){code} })`

2. Within the User model we start by passing in a 'defaults' object with key value pairs (HM: it is defaults not default)
  `var User = Backbone.User.extend({
    defaults: {
      name: "N/A",
      email: "N/A",
      image: ""
    }
  })`

3. Within the User model we then pass in the initialize method where we include our event listener paramaters when the model is changed (this.on("event")) (HM: think of this in rails as our flash[notices] whenever we created, updated or deleted values in our database model). The syntax is also important and we listen for specific events. In the example below we are listening for the event 'change' and specific change events 'change:title'. Within each event listener method we pass in a function which accepts two args, 1. the model that was changed, and 2. the value of the property that was changed. We can then use the Backbone helper method previousAttributes() to get an object of the models previous attributes (see below)
  `var User = Backbone.User.extend({
    defaults: {
      name: "N/A",
      email: "N/A",
      image: ""
    },
    initialize: function() {
      this.on("change",function(){
        console.log("A user model was changed");
      });

      this.on("change:name", function(model, newName){
        var oldName = model.previousAttributes().name;
        var newName = newName;
        console.log("Old name was: "+oldName+" new name is: "+newName);
      });
    }
  })`

# Instantiating a new model
- Creating a new model inheriting the default values
  `var howie = new User();`

- Creating a new model with values
  `var badger = new User({
    name: "Badger",
    email: "badger@ga.co"
    image: "none"
  });`

# Accessing and changing values in a model
- Viewing the model's attributes in an object format (JSON). Use Backbone built-on method toJSON()
  `howie.toJSON()`

- Viewing a a specific property of an object. Use the Backbone .get method. HM: this is equivalent to looking inside the models attribute property and searching for the name property
  `badger.get("name")`

- Changing or setting new values of a property. Use the Backbone .set method
  `howie.set({
    name: "Howie",
    email: "howie@ga.co",
    new: "new value"
  });`

- View recent changes. Use Backbone method .changedAttributes()
  `var recentChanges = howie.changedAttributes();
  console.log(recentChanges);
  `

## COLLECTIONS
- A Backbone collection is a JS object with a models property which has an array of Backbone Models
- Think about the relationship as a Collection has_many :models and a Model belongs_to :collection

# Setup
1. To create a Collection in Backbone we reference the Collection object prototype (similar to Model) and pass in properties. HM: adopt the pluralization convention, e.g. Users and User
  `var Users = Backbone.Collection.extend({})`

2. We pass in two key properties, a 'model' and an initialize method handling event listeners. The model property (below) references the model that this collection has_many of. Think of this as has_many: users. HM: capitalization is very important in this
  `var Users = Backbone.Collection.extend({
    model: User
  })`

3. The second method we pass in is initialize which is an anonymous function method which listens for changes in the collection e.g. add and remove
`var Users = Backbone.Collection.extend({
  model: User,

  initialize: function() {
    this.on("add", function(){
      console.log("a User model was added to the Users collection");
    });

    this.on("remove", function(){
      console.log("a User model was removed to the Users collection");
    });
  }
})`

# Instantiating a new collection
- Create a new empty collection
  ` var usersEmpty = new Users();`

- Creating a new collection passing in models into the array. HM: This is the same as pushing Models into the Collection models property array. Remember this is passed in as an array
  ` var usersSome = new Users([howie, badger]);`
  or pass in new properties which inherit the User model. HM note: we can do this because we have referenced the model: User when creating the Users collection above
  `var usersNew = new Users([
    {
      id: 1,
      name: "wolf",
      email: "wolf@ga.co"
    },
    {
      id: 2,
      name: "groucho",
      email: "groucho@ga.co"
    }
  ])`

# Finding models in a collection
- Use the Backbone .get(id) method which finds the id. This is the same in Rails activerecord as find(id)
  ` var wolf = usersNew.get(1)`
  or to retrieve by index position (less common)
  ` var wolf = usersNew.at(0)`

- Use the Underscore helper .findWhere to find a Model by property value. This is the same in Rails activerecord as find_by(:name => "howie")
  ` var groucho = usersNew.findWhere({name: "groucho"})`

# Adding models into a collection
- Use the Backbone .add(model) method to add a new model to the collection
  ` var harpo = new User({
      name: "Harpo",
      email: "harpo@ga.co"
      image: "none"
    });

    usersNew.add(harpo);
  `

- To remove models from collections two step:
  1. create a new variable of what we want to remove
  ` var harpo = usersNew.findWhere({name: "harpo"});`
  2. Then remove from original collection
  ` usersNew.remove(harpo);`
