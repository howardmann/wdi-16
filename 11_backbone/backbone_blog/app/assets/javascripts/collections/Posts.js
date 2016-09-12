var app = app || {};

app.Posts = Backbone.Collection.extend({
  // URL
  url: "/posts",
  // Model
  model: app.Post
  // Initialize
  // Custom functions - filtering etc.
});

// Because we specified the URL property
  // When we call .fetch() it will make a GET request to that URL
    // app.posts = new app.Posts();
    // app.posts.fetch();  // => GET /posts
