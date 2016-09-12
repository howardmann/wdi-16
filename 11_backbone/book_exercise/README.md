# HOWIE_BURGER BACKBONE.JS STUDY NOTES
- Model represents an instance of a model i.e. user = User.first
- Collections represents a group of individual models e.g. could be users = User.all or custom collection

## MODELS
- A Backbone model is similar to a Ruby instance variable for example @user = User.first

### Setup
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

3. Within the User model we then pass in the initialize method where we include our event listener paramaters when the model is changed (this.on("event")) (HM: think of this in rails as our flash[notices] whenever we created, updated or deleted values in our database model). The syntax is also important and we listen for specific events. In the example below we are listening for the event 'change' and specific change events 'change:title' and then passing in a success callback function(arg1, arg2){}. Within each event listener method we pass in a function which accepts two args, 1. the model that was changed, and 2. the value of the property that was changed. We can then use the Backbone helper method previousAttributes() to get an object of the models previous attributes (see below)
  ```
  var User = Backbone.User.extend({
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
  })
  ```

### Instantiating a new model
- Creating a new model inheriting the default values
  `var howie = new User();`

- Creating a new model with values and overriding default values

  `var badger = new User({
    name: "Badger",
    email: "badger@ga.co"
    image: "none"
  });`

### Accessing and changing values in a model
- Viewing the model's attributes in an object format (JSON). Use Backbone built-on method toJSON()
  `howie.toJSON()`
  or
  `howie.attributes`

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

### Setup
1. To create a Collection in Backbone we reference the Collection object prototype (similar to Model) and pass in properties. HM: adopt the pluralization convention, e.g. Users and User

  `var Users = Backbone.Collection.extend({})`

2. We pass in two key properties, a 'model' and an initialize method handling event listeners. The model property (below) references the model that this collection has_many of. Think of this as has_many: users. HM: capitalization is very important in this

  `var Users = Backbone.Collection.extend({
    model: User
  })`

3. The second method we pass in is initialize which is an anonymous function method which listens for changes in the collection e.g. add and remove
```
var Users = Backbone.Collection.extend({
  model: User,

  initialize: function() {
    this.on("add", function(){
      console.log("a User model was added to the Users collection");
    });

    this.on("remove", function(){
      console.log("a User model was removed to the Users collection");
    });
  }
})
```

### Instantiating a new collection
- Create a new empty collection
  ` var usersEmpty = new Users();`

- Creating a new collection passing in models into the array. HM: This is the same as pushing Models into the Collection models property array. Remember this is passed in as an array

  ` var usersSome = new Users([howie, badger]);`

  or pass in new properties which inherit the User model. HM note: we can do this because we have referenced the model: User when creating the Users collection above

  ```
  var usersNew = new Users([
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
  ])
  ```

### Finding models in a collection
- Use the Backbone .get(id) method which finds the id. This is the same in Rails activerecord as find(id)
  ` var wolf = usersNew.get(1)`
  or to retrieve by index position (less common)
  ` var wolf = usersNew.at(0)`

- Use the Underscore helper .findWhere to find a Model by property value. This is the same in Rails activerecord as find_by(:name => "howie")

  ` var groucho = usersNew.findWhere({name: "groucho"})`

### Adding models into a collection
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

## UNDERSCORE TEMPLATE COMPILER
- Underscore.js has view helpers which use rails erb syntax to assist in string interpolation

```
var helloMsg = _.template("<p>Hello <%=name%> <%=surname%>");
var joeBlow = helloMsg({name: "Joe", surname: "Blow"});
console.log(joeBlow);

// Passing in variables
var jane = "Jane";
var janeName = helloMsg({name: jane, surname: "Blane"});
console.log(janeName);

```

## VIEWS
- Principle: ItemView has a 1-to-1 relationship with a Model and is responsible for displaying as well as listening for events of a single model. A ListView is responsible for looping through and handling each model from a collection and passing it on to an item view to execute

- Similar to our AJAX examples where the $.ajax request was responsible for fetching the JSON data then passing it to a callback for looping through and handling the data, which then assigned the variables and then passed it on to a callback for displaying single items on the page


### Model Views

1. Create a single view class. Use the underscore template helper as per above to display the html.
```
  var UserView = Backbone.View.extend({
    tagName: 'li',
    // el references the element that is created which by default is <div></div> unless we override with a custom tagName such as li above which will make this.el = <li></li>. HM: this allows us to create jQuery elements and append stuff to them

    template: _.template("Username: <%=name%> and Email: <%=email%>"),

    // Render is a convention that Backbone uses, it can be named anything. Think of this as our displayContent callback we typically use when writing jQuery. We finish with return this; to assist in chaining
    render: function(){
      var attributes = this.model.toJSON();
      var htmlOutput = this.$el.append(this.template(attributes));
      $('#container-div').append(htmlOutput);
      return this;
    }
  });
```
2. Another alternative to writing the template string in the example above is to write it in a script tag within the html. This allows us to write multi-line html. We write the src for the script tag as text/template which will not render on the page See example below:
```
// HTML view
  <script src="text/template" id="template-user-item">
    <ul>
      <li>Name: <%=name%></li>
      <li>Email: <%=email%></li>
    </ul>
  </script>

// JS view
  template: _.template($(#"template-user-item").html()),
```

3. Create a new view instance variable, link it to a model instance variable, call the render function to execute the method
```
  var howieView = new UserView({model: howie});
  var howieView.render();
```

### Collection/ Nested Views
1. Following on from above. Create a view class for looping through and handling collection of models before passing on to the UserView function. We will leave its options blank for now (for education purposes). Then create a new instance of the view and pass in a Collection of models into its options with property collection. This saves an array of instance models in a property called models within collection. HM: console.log(userListView) in the browser to understand where this is saved, this will help when you need to access it later

```
  var UserListView = Backbone.View.extend({});
  var userListView = new UserListView({collection:usersNew});
```

2. Create a render function whose job is to loop through the collection of models and pass them on to a callback function. We use the underscore.js helper method 'each'. HM: Remember the array is saved in collection.models. We also must pass in 'this' as a third arg in order to scope this to the right reference and not the global window object

```
  var UserListView = Backbone.View.extend({
    render: function(){
      _.each(this.collection.models, this.handleUser, this);
    },

    handleUser: function(user){
      // Do some code
    }
  });

  var userListView = new UserListView({collection:usersNew});

```

3. After setting up the each loop we write out the callback for handleUser whose job is to assign variables and pass it on to the next function whose job is to display single users. We do this by creating new instances of the UserView class and calling the render function to display individual movies. HM: remember to pass in an argument into the handleUser function which we will then use to call the other View class

```
  var UserListView = Backbone.View.extend({
    render: function(){
      _.each(this.collection.models, this.handleUser, this);
      return this;
    },

    handleUser: function(user){
      var childUserItemView = new UserView({model: user});
      childUserItem.render();
    }
  });

  var userListView = new UserListView({collection:usersNew});

```

4. And voila, that's the basics.
