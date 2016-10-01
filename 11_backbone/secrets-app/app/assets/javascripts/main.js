var app = app || {};

$(document).ready(function(){

  app.secrets = new app.Secrets();
  app.secrets.fetch();

  // This is for the purpose of fetching and syncing from the server
  // window.setInterval(function(){
  //   app.secrets.fetch();
  // },5000);

  app.router = new app.Router();
  Backbone.history.start();

});
