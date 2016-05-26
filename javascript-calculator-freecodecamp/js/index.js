$(document).ready(function(){
  var nos = [];
  var operators = [];
  var result = 0;
  var disp = $(".display");  
  var operatorButtons = $(".btnOperator");
  var numberButtons = $(".btnNumber");
  var acButton = $(".btnAc");
  var ceButton = $(".btnCe");
  var ansButton = $(".btnAns");
  var equalButton = $(".btnEqual");
  
  
  numberButtons.on("click",function(e){
    var btn = $(this);
    disp.val(disp.val() + btn.text());    
  });
  
  operatorButtons.on("click",function(e){
    var btn = $(this);
    nos.push(parseInt(disp.val()));
    operators.push(btn.text());
    disp.val(disp.val() + btn.text());
  });
  
  acButton.on("click",function(){
    disp.val("");
    disp.attr("placeholder","0000000000000");
  });
  
  equalButton.click(function(){
    var exp;
    for(var i = 0; i < nos.length; i++){
      exp = nos[i]
    }
  });
  
  
});