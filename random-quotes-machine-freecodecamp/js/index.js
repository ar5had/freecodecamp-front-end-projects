$(document).ready(function() {
  getRandomJokes();
  $("#next").on("click",function(){
    getRandomJokes();
  });

});//ends document.ready

function getRandomJokes(){
    $.getJSON("http://api.icndb.com/jokes/random",
           function(data){
    $("#writer").html(data["value"].joke);
    $("#quote").html(data["value"].joke);

    var tweetUrl ="https://twitter.com/intent/tweet?text=" + data["value"].joke;
   //$("body").css("background-image","url('https://source.unsplash.com/random')");
    $("#tweetAnchor").attr("href",tweetUrl);
  });

}
