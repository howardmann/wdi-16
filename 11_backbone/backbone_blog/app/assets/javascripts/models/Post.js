// Declare app variable
// Prevents this variable from being redefined each time

var app = app || {};

// You need to recreate all of your Rails models in Backbone
  // app/models/Post.rb in Javasript


// Namespace scope all object values
app.Post = Backbone.Model.extend({
  // Model uses the urlRoot property and takes the value of the restful post root
    // We use urlRoot if we want our URL to be dynamic, e.g. for single records
  urlRoot: '/posts',

  defaults: {
    author: "Anonymous",
    title: "Untitled",
    content: ""
  }
});

// var p1 = new app.Post();
// console.log(p1.toJSON());
//
// var p2 = new app.Post({
//   author: "Not Anonymous"
// });
// console.log(p2.toJSON());
// p2.save();  // This will send a POST request to /posts

// HM: p2.save() calls either post to /posts or update to /posts/:id depenending on whether there is an existing id
// p2.destroy() calls the delete method on /posts/:id

// p2.destroy(); // This will send a DELETE request to /posts/2

// p2.fetch(); // This would make a GET request to /posts/:id i.e. /posts/2
