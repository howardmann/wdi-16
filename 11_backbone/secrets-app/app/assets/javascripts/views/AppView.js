var app = app || {};

// Job does not render it handles and delegates to other views. Collection view delegates
app.AppView = Backbone.View.extend({
  // el or tagName
  el: "#app",

  // events
  // event functions
  // render
  render: function(){
    console.log("An instance of the appView was created");
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    var secretInputView = new app.SecretInputView();
    secretInputView.render();

  }

});
