var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  // toggle the completed state of this todo item
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }




});
