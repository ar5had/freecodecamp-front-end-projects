$(document).ready(function(){
  var inc = $(".inc");
  var dec = $(".dec");

  inc.on("click",function(){
    var elem = $(this).prev();
    var value = parseInt(elem.text());
    value = Math.min(99, value+1);
    elem.text(value);
    if(elem.hasClass("sl")){
      $("#sesTimer").text(value);
    }
  });

  dec.on("click",function(){
    var elem = $(this).next();
    var value = parseInt(elem.text());
    value = Math.max(0, value-1);
    elem.text(value);
    if(elem.hasClass("sl")){
      $("#sesTimer").text(value);
    }
  });

});
