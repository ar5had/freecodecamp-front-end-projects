$(document).ready(function(){

  var key = "42c038e003b8481d9901c135065a08ce";
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = Math.floor(position.coords.latitude);
      var long = Math.floor(position.coords.longitude);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID="+key,function(data){

        $("#temp").html(JSON.stringify(data));
        var temp = round(data.main.temp-273);
        var stat = data.weather[0].main;
        var loc = data.name+", "+data.sys.country;
        $("#weatherStatus").html(stat);
        $("#location").html(loc);
        $("#temp").html(temp);
      });

    }); 
  }
  
  $("#convert").toggle(function(){
    $(".cel").addClass("off");
    $(".cel").removeClass("convert");
    $(".fah").addClass("convert");
    $(".fah").removeClass("off");
    var elem = document.getElementById("#convert");
    elem.value = toFah(elem.value);
    },function(){
    $(".fah").addClass("off");
    $(".fah").removeClass("convert");
    $(".cel").removeClass("off");
    $(".cel").addClass("convert");
    var elem = document.getElementById("#convert");
    elem.value = toCel(elem.value);
    
 });

});

function round(no, precision){
  var multp = Math.pow(10, precision || 1);
  return (Math.round(no * multp))/ multp;
}

function toFah(temp){
  return (12*temp/5 +32);
}

function toCel(temp){
  return (5*temp/12 -32);
}