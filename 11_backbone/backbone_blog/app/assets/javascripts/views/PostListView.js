var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: 'li',  // assigned to this.el and this.$el

  events: {
    'click':'showPost'
  },

  showPost: function(){
    console.log("A post should be shown");
    app.router.navigate("/posts/"+this.model.get("id"), true);
  },

  render: function(){
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  }


});
