var imgAnimation;

// <div class="controls">
//   <button class="reverse">Reverse</button>
//   <button class="pause">Pause</button>
//   <button class="play">Play</button>
//   <button class="doubleSpeed">Double Speed</button>
//   <button class="halfSpeed">Half Speed</button>
// </div>


$(document).ready(function(){
  var $img = $('.unsplash');
  var $reverse = $('.controls .reverse');
  var $pause = $('.controls .pause');
  var $play = $('.controls .play');
  var $doubleSpeed = $('.controls .doubleSpeed');
  var $halfSpeed = $('.controls .halfSpeed');
  var $seek = $('.seek');
  var $speed = $('.speed');

  imgAnimation = TweenMax.to($img,20,{
    left: "80vw",
    delay: 0.5,
    paused: true,
    repeat: -1,
    ease: SlowMo.ease.config(0.7, 0.7, false),
    top: Math.random() > 0.5 ? "90vh" : "0vh",
    yoyo: true,
    repeatDelay: 0.5
  });

  $reverse.on('click',function(){
    console.log('reverse');
    imgAnimation.reverse();
  });

  $pause.on('click',function(){
    console.log('pause');
    imgAnimation.pause();
  });

  $play.on('click',function(){
    console.log('play');
    imgAnimation.play();
  });

  $doubleSpeed.on('click',function(){
    console.log('doubleSpeed');
    imgAnimation.timeScale(2);
  });

  $halfSpeed.on('click',function(){
    console.log('halfSpeed');
    imgAnimation.timeScale(0.5);
  });

  $seek.on('input change',function(){
    var currentVal = parseInt( $seek.val());
    imgAnimation.pause();
    imgAnimation.seek(currentVal);
    console.log(currentVal);
  });

  $speed.on('input change',function(){
    var currentVal = parseInt( $speed.val());
    imgAnimation.play();
    if (currentVal) {
      imgAnimation.timeScale(currentVal);
    } else {
      imgAnimation.timeScale(1);
    }

    console.log(currentVal);
  });




  // billAnimation = TweenMax.to($img,2,{
  //   width: "500px",
  //   delay: 2,
  //   // // -1 is infinite
  //   // repeat: 1,
  //   // // rotation: 360,
  //   // // scaleX: 2,
  //   // yoyo: true,
  //   // // onUpdate: function(){
  //   // //   console.log("The animation is taking place");
  //   // // },
  //   // onComplete: function(){
  //   //   console.log("The animation has finished");
  //   // }
  // });
  //

  // jQuery equivalent
  // $img.animate({
  //   width: "500px"
  // },2000);




});
