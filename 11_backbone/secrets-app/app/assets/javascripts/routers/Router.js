var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "":"initializeSecretsApp"
  },

  initializeSecretsApp: function() {
    var appView = new app.AppView();
    appView.render();
  }
});
