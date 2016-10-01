// Make custom jQuery function using $.fn.name = function(){...};
// When calling it we need to select an item and then call item

// Use an IIFE - Immediately Invoked Function Expression
  // Encapsulating your code
  // Protecting your variables
  // Easy to distribute
  // Avoiding namespace pollution

(function($){
  var color = "rebeccapurple";

  $.fn.makeRebeccaPurple = function() {
    this.css({
      color: color
    });

    // Best practice to return this at end in order to chain
    return this;
  };

  $.fn.addRandomNumber = function() {
    this.each(function(){
      var $currentListItem = $(this);
      var currentText = $currentListItem.text();
      $currentListItem.text( currentText + " - " + Math.random());
    });

    return this;
  };

})(jQuery);

var color = "black";

$(document).ready(function(){
  $("li").makeRebeccaPurple().addRandomNumber();

});
