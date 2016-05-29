$(document).ready(function(){
  var user = "", comp = "";
  var boxes = [];
  var moves = 0;
  $(".btn").on("click", function(){
    user = $(this).text();
    if(user === 'X')
      comp = "O";
    else
      comp = "X";
    $(".selection").fadeOut(1000,function(){
      $(".board").hide().removeClass("hidden").fadeIn(1000);
      gameStatus();
    });
  });

  $(".lines").click(function(){
    if($(this).children().text() === "")
      $(this).children().text(user);
  });

  function fetchingBoxes(){
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3 ; j++){
        var pos = String(i) + String(j);
        boxes.push($("#box"+pos));
      }
    }
  }

  function gameStatus(){
    var winner = checkWin();
    if(winner === user){
      $("#status").text("You win!");
    }
    else{
      $("#status").text("You loose!");
    }
  }
  // this function returns winner, call it if moves are greater than 4
  function checkWin(){
    //for rows
    for(var i = 0; i < 3; i++){
        var elem = $(".board").find("div[datarow ="+i+"]");
        // empty blocks are equal to each other but NaN is not equal to itself

        var c = $(elem[2]).children().text() || NaN;
        var a = $(elem[0]).children().text() || NaN;
        var b = $(elem[1]).children().text() || NaN;
        if(a === b  && b === c)
          return a;
    }
    //for columns
    for(var i = 0; i < 3; i++){
        var elem = $(".board").find("div[datacol ="+i+"]");
        // empty blocks are equal to each other but NaN is not equal to itself

        var c = $(elem[2]).children().text() || NaN;
        var a = $(elem[0]).children().text() || NaN;
        var b = $(elem[1]).children().text() || NaN;
        if(a === b  && b === c)
          return a;
    }
    //for leftDiagonal
    {

        // empty blocks are equal to each other but NaN is not equal to itself

        var c = $(".board").find("div[datarow =0][datacol = 0]").children().text() || NaN;
        var a = $(".board").find("div[datarow =1][datacol = 1]").children().text() || NaN;
        var b = $(".board").find("div[datarow =2][datacol = 2]").children().text() || NaN;
      console.log(a,b,c);
        if(a === b  && b === c)
          return a;
    }
    //for rightDiagonal
    {

        // empty blocks are equal to each other but NaN is not equal to itself

        var c = $(".board").find("div[datarow =2][datacol = 0]").children().text() || NaN;
        var a = $(".board").find("div[datarow =1][datacol = 1]").children().text() || NaN;
        var b = $(".board").find("div[datarow =0][datacol = 2]").children().text() || NaN;
      console.log(a,b,c);
        if(a === b  && b === c)
          return a;
    }

  }//ends checkWin


});
