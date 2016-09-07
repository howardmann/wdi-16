console.log("Hello World");

$(document).ready(function(){

  var updateDashboard = function(data){
    $('h2.currentTime').text(data.currentTime);
    $('p.lotto').text(data.lottoNumbers);
    $('p.uptime').text(data.uptime);
    $('p.fortune').text(data.fortune);
  };

  var fetchInfo = function() {
    $.ajax({
      url: "/info",
      type: "GET",
      dataType: "JSON"
    }).done(function(data){
      updateDashboard(data);
    });
  };

  window.setInterval(fetchInfo,2000);

  $("#lucky button").on('click', function(){
    console.log("Lucky button was clicked");
    // What the route is
    $("#lucky p").load("/lotto_numbers", function (){
      console.log("lotto loaded");
    });
    // What type of request am I making
  });

  $("#uptime button").on('click', function(){
    console.log("Uptime button was clicked");

    $.ajax({
      url: '/uptime',
      type: "GET",
      dataType: "TEXT"
    }).done(function(response){
      var uptime = response;
      $('#uptime p').prepend('<br/>').prepend(uptime);
      console.log(response);
    });

    // // From previous example above
    // $("#uptime p").load("/uptime", function (){
    //   console.log("uptime loaded");
    // });
  });

  $('#fortune button').on('click', function(){
    console.log("Fortune button was clicked");

    $.ajax({
      url: '/fortune',
      type: 'GET',
      dataType: 'TEXT'
    }).done(function(response){
      var fortune = response;
      $('#fortune p').text(fortune);
      console.log(response);
    });
  });


});
