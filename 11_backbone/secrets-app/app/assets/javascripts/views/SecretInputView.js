var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm",

  events: {
    'click button': 'createSecret',
    'keydown textarea': 'checkForEnter'
  },

  createSecret: function(){
    var newSecret = new app.Secret();
    var userInput = this.$el.find("textarea").val();
    newSecret.set({"content":userInput});

    newSecret.save().done(function(){
      console.log("new secret");
    });

    app.secrets.add(newSecret);

    this.$el.find('textarea').val('').focus();
  },

  checkForEnter: function(e) {
    var ENTER_KEY = 13;
    if (e.which === ENTER_KEY) {
      e.preventDefault();
      this.createSecret();
    }
  },

  render: function(){
    var secretInputViewTemplate = $("#secretInputViewTemplate").html();
    this.$el.html(secretInputViewTemplate);
  }

});


// <script type="underscore/template" id="secretInputViewTemplate">
//   <textarea placeholder="Tell me all your secrets"></textarea>
//   <button>
//     Submit
//   </button>
// </script>
