var app = app || {};

app.AppView = Backbone.View.extend({
  // el
  el: "#app", // Adds this.el and this.$el

  // render
  render: function(){
    var appViewMarkup = $("#appViewTemplate").html();
    this.$el.html(appViewMarkup);

    this.collection.each(function(post){
      var postListView = new app.PostListView({model: post});
      postListView.render();
    });
  }

  //Initialize
  //events
  // custom event

});


// <script type="html/template" id="appViewTemplate">
//   <h1>My blog with all my feelings</h1>
//   <ul id="posts"></ul>
// </script>
