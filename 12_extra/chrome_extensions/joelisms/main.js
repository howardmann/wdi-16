var quotes = [
  "oh god, hotdog burger man, take me to the drive-in and prove you love me",
  "how about that shooting in Oregon. Hilarious!",
  "I couldn't give a shit about your stupid little projects",
  "Get fucked",
  "I would rather overdose on heroin",
  "She was less interested in a clear container full of my dead skin flakes that the advertising had led me to believe"
];

$(document).ready(function(){
    $(".quote p").text("");

    var getJoelism = function(){
      var n = Math.floor(Math.random()*quotes.length);
      var quote = quotes[n];

      $(".quote p").text(quote);
    };

    $('button').on('click', getJoelism);
    getJoelism();
});
