$(document).ready(function(){
  var user = "";
  $(".btn").on("click", function(){
    user = $(this).text();
    $(".selection").fadeOut(1000,function(){
      $(".board").hide().removeClass("hidden").fadeIn(1000);
    });
  });
  
});