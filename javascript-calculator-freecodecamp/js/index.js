$(document).ready(function(){
  var nos = [];
  var flag = false;
  var operators = [];
  var result = 0;
  var disp = $(".display");
  var operatorButtons = $(".btnOperator");
  var numberButtons = $(".btnNumber");
  var acButton = $(".btnAc");
  var ceButton = $(".btnCe");
  var equalButton = $(".btnEqual");
  var normalButtons = $(".btnN");
  var exp = [];
  var no = "";
  var ans = null;
  var prev = [];
  var prevExp = [];
  var precedence = ['*','/','%','+','-'];
  var cePressed = false;

  numberButtons.on("click",function(){
    if(flag){
      updateScreen(exp);
      flag = false;
    }
    var btn = $(this);
    no += (btn.text());
    updateScreen(disp.val() + btn.text());
  });

  operatorButtons.click(function(){
    if(no)
      updateExp(no);
    no = "";
    var txt = $(this).text() === 'MOD' ? '%' : $(this).text();
    var txt = $(this).text() === 'ANS' ? ans : $(this).text();
    updateExp(txt);
    updateScreen(disp.val() + $(this).text());
  });

  acButton.on("click",function(){
    updateScreen("");
    no = "";
    exp = [];
    prev = [];
    prevExp = [];
    cePressed = false;
    disp.attr("placeholder","0000000000000");
  });

  ceButton.click(function(){
    cePressed = false;
    if(exp.length > 1){
      clrscr();
      updateScreen(prev.pop());
      exp = prevExp.pop();
    }
  })

  equalButton.click(function(){
    if(no)
      exp.push(no);
    no = "";
    for(var i = 0; i < precedence.length; i++){
      while(exp.indexOf(precedence[i]) >= 0){
        var pos = exp.indexOf(precedence[i]);
        var lhs = parseInt(exp[pos-1]);
        var rhs = parseInt(exp[pos+1]);
        console.log(pos,lhs,rhs);
        switch(precedence[i]){
          case '/':
            var result = lhs/rhs;
            break;
          case '*':
            var result = lhs*rhs;
            break;
          case '+':
            var result = lhs+rhs;
            break;
          case '-':
            var result = lhs-rhs;
            break;
          case '%':
            var result = lhs % rhs;
        }
        exp.splice(pos-1,3,String(result));

      }
      updateScreen(exp);
    }
    ans = exp[0];
    flag = true;
    exp = [];
  });

  function updateScreen(str){
    if(!cePressed){
      prev.push( disp.val() );
      cePressed = false;
    }
    console.log("prev is ",prev);
    disp.val(str);
  }

  function updateExp(str){
    prevExp.push(exp);
    console.log("prevExp is ",prevExp);
    exp.push(str);
  }

  function clrscr(){
    disp.val("");
  }
});
