var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: '/secrets',

  model: app.Secret,

  initialize: function(){
    this.on("add",function(secret){
      var secretView = new app.SecretView({
        model: secret
      });
      secretView.render();
    });
  }
});

// Collections functionality

// HM: this is for illustration purposes only. We would ordinarily fetch the data from the server as oppsoed to addding it to the collection
// var secrets = new app.Secrets();
// secrets.add({});
// secrets.add([
//   {"content":"one secret"},
//   {"content":"two secret"},
// ]);
// console.log(secrets);

// READ step
// var secrets = new app.Secrets();
// secrets.fetch();
