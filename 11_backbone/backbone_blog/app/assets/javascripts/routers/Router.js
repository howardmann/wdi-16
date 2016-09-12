var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "":'index', // #
    "posts":'index',  // #posts
    "posts/:id":"showPost",  // #posts/:id
    "*splat": 'error' // If nothing matches, run the error function
  },

  error: function(){
    $("#app").html("Error splat");

    window.setTimeout(function(){
      app.router.navigate("/", true); // shorthand for {trigger: true}
    },500);
  },

  showPost: function(id){
    var post = app.posts.get(id);
    console.log(post.toJSON());
    var postView = new app.PostView({model: post});
    postView.render();
  },

  index: function(){
    console.log("You are at home");
    var appView = new app.AppView({
      collection: app.posts
    });
    appView.render();
  }


});
