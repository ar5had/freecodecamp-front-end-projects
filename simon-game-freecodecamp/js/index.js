$(document).ready(function(){
  var on = false;
  var start = false;
  var strict = false;
  var score = 0;


//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////control buttons setup starts//////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////


  $(".onOff").click(function(){
    if(!on){
      $(".strict").removeClass("unclickable");
      $(".start").removeClass("unclickable");
      on = true;
      $(this).text("off");
      $(".count").text("Count :");
      $(".score").text(score);
      $(".display > h5").css({'padding-top': "0"});
    }
    else{
      on = false;
      $(this).text("On");
      $(".display > h5").css({'padding-top': "30rem"});
      $(".count").text("");
      $(".score").text("");
      $(".strict").text("strict");
      strict = false;
      $(".start").text("start");
      start = false;
      $(".strict").addClass("unclickable");
      $(".start").addClass("unclickable");
      pattern = [];
    }
  });

  $(".start").click(function(){
    if(on){
      if(!start){
        $(this).text("Stop");
        $(".strict").addClass("unclickable");
        start = true;
        startGame();
      }
      else{
        $(".strict").removeClass("unclickable");
        $(this).text("Start");
        start = false;
        $(".strict").text("strict");
        strict = false;
        pattern = [];
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
      pattern = [];
    }
  });


//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////control buttons setup ended///////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////////// ///////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

});
