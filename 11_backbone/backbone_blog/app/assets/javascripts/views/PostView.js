var app = app || {};

app.PostView = Backbone.View.extend({
  el: "#app",
  render: function(){
    var templateMarkup = $("#postViewTemplate").html();
    var dynamicMarkupTemplate = _.template(templateMarkup);

    var output = dynamicMarkupTemplate(this.model.toJSON());
    this.$el.html(output);
  }
});
