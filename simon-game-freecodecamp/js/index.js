$(document).ready(function(){
  var on = false;
  var start = false;
  var strict = false;
  var score = 1;
  var count = 0;
  var glowButtonClickable = false;
  var clickCount = 0;
  var glowButtons = [], clickedButtons = [];
  var timeout;

  var audio = document.getElementById("audio");

  $(".onOff").click(function(){
    if(!on){
      $(".strict").removeClass("unclickable");
      $(".start").removeClass("unclickable");
      on = true;
      $(this).text("off");
      $(".count").text("Welcome !!!");
      $(".display > h5").css({'padding-top': "0"});
    }
    else{
      clearGame();
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
        updateScore();
        $(this).text("Stop");
        $(".strict").addClass("unclickable");
        start = true;
        setTimeout(function(){startGame();},1200);
      }
      else{
        clearGame();
        updateScore();
        $(".strict").removeClass("unclickable");
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
      pattern = [];
    }
  });

  function startGame(){
    var no =  (Math.floor(Math.random()* 10 + 1) % 4) + 1 ;
    glowButtons.push( String(no) );
    glow();
  }

  function glow(){
      var str = ".button" + glowButtons[count];
      audio.play();
      $(str).addClass("glow").delay(1000).queue(function(){
        count++;
        $(this).removeClass("glow").dequeue();
        if(count < glowButtons.length){
          setTimeout(function(){
              glow();
          },900);
        }
        else{
          count = 0;
          glowButtonClickable = true;
        }
      });
  }

  $(".button").click(function(){
    if(glowButtonClickable){
      clickCount++;
      clickedButtons.push($(this).attr('data-pos'));
      var no = String($(this).attr('data-pos'));
      audio.play();
      if(clickedButtons[clickCount-1] !== glowButtons[clickCount-1]){
        showStatus();
        if(strict)
          clearGame();
        else
          giveAnotherChance();
        return;
      }
      if(clickedButtons.length === glowButtons.length){
        glowButtonClickable = false;
        clickCount = 0;
        clickedButtons = [];
        score++;
        updateScore();
        if(score !== 21){
          timeout = setTimeout(function(){
            startGame();
          }, 1500);
        }
        else
          showVictory();
      }
    }
  });

  function clearGame(){
    glowButtonClickable = false;
    clickCount = 0;
    score = 1;
    count = 0;
    glowButtons = [];
    clickedButtons = [];
    $(".start").text("start");
    start = false;
    updateScore()
  }

  function giveAnotherChance(){
    glowButtonClickable = false;
    clickCount = 0;
    clickedButtons = [];
    setTimeout(function(){
      glow();
    },1500);
  }

  function showStatus(){
    $(".count").text("!!!!!!!!!").css({color:"red"});
    $(".score").text("");
    setTimeout(function(){
      $(".count").text("Count : ").css({color:"#EEE"});
      $(".score").text(score);
    },1200);
  }

  function updateScore(){

    $(".count").text("Count : ").css({color:"#EEE"});
    $(".score").text(score);

  }

  function showVictory(){
      $(".score").text("");
      $(".count").text("You Win !!!").css({color:"#69b669"});
      setTimeout(function(){clearGame();}, 2000);
  }
});
