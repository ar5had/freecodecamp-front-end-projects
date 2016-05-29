$(document).ready(function(){
  var on = false;
  var start = false;
  var strict = false;
  var score = 0;
  $(".onOff").click(function(){
    if(!on){
      on = true;
      $(this).text("off");
      $(".count").text("Count :");
      $(".score").text(score);
    }
    else{
      on = false;
      $(this).text("On");
      $(".count").text("");
      $(".score").text("");
      $(".strict").text("strict");
      strict = false;
      $(".start").text("start");
      start = false;
    }
  });

  $(".start").click(function(){
    if(on){
      if(!start){
        $(this).text("Stop");
        start = true;
      //random no thing...
      }
      else{
        $(this).text("Start");
        start = false;
        $(".strict").text("strict");
        strict = false;
      }
    }
  });

  $(".strict").click(function(){
    if(!strict && !start && on){
      $(this).text("Easy");
      strict = true;
    }
    else if(strict && !start && on){
      $(this).text("Strict");
      strict = false;
    }
  });

});
