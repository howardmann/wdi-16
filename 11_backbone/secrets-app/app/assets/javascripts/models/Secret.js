var app = app || {};

app.Secret = Backbone.Model.extend({
  urlRoot: '/secrets',

  defaults: {
    content: "N/A"
  },

  initialize: function() {
    console.log("New secret made");
  }
});

// // Create edit and destroy new models
// var s = new app.Secret(); // Creating an instsance of the app.Secret constructor in javascript, not communicating to server. It will have the default values
//
// // CREATE step
// s.save();   // Because there is no id it makes a Post request to the urlRoot
//
// // Read step
// s.fetch(); // Make a GET request to urlRoot + id
//
// // Update step
// s.set("content","I put bleach in ur coffee");
// s.save(); // Because there is an id it will send a PUT request to the urlRoot + id
//
// // Delete step
// s.destroy(); // DELETE request to urlRoot + id
