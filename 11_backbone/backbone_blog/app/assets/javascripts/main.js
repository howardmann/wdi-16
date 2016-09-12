var app = app || {};

$(document).ready(function(){

  // Get all of the posts in database
    // Once they are back render them into the appView

  app.posts = new app.Posts();
  console.log(app.posts); // Creates a colleciton instance with an array of empty models

  // We then run the fetch request from the url and when successful pass it into the view app. We need to use done to wait until the fetch requset is done
  app.posts.fetch().done(function(e){

    app.router = new app.Router();
    Backbone.history.start();

    // var appView = new app.AppView({
    //   collection: app.posts
    // });
    // appView.render();

  });



});
