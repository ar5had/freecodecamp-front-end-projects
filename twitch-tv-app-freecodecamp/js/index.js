$(document).ready(function(){
  var results = $('#resultArea');
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404"];
  var getInfo = function(name){
    var url = "https://api.twitch.tv/kraken/streams/"+name;
    var status = "";
    var link = "";
    var channelLink = "";
    var img = "";
    var channelName = name;
    $.getJSON(url,function(json){
      //var jsn= JSON.stringify(json);
      //alert(jsn);
      if(!json.status){
        //alert(json.stream);
        if(json.stream)
          status = json.stream.game;  
        else
          status = "Offline";
        //alert(status);
        link = json._links.channel;
        //alert(link);
        
        $.getJSON(link,function(channelJson){
          //var jsn= JSON.stringify(channelJson);
          //alert(jsn);
          name = channelJson.display_name;
          //alert(name);
          img = channelJson.logo;
          //alert(img);
          channelLink = channelJson.url;
          //alert(channelLink);
        });
      }
      else if(json.status===402){
        status = "Account closed";
      }
      else{
        status = "No account found";
      }  
    });//main get Req ends
  };//getInfo ends
  
  function displayResult(){
    for(var index in users){
      getInfo(users[index]);
      var elem = $("<li>");
      elem.append($('<img>')).attr("src",img);
      var nameWithLink = $('<a>');
      nameWithLink.attr("href",channelLink);
      nameWithLink.append($('<p>').text(name));
      elem.append(nameWithLink);
      elem.append($('<p>').text(status));
    }   
 }//ends Display Result
  
  displayResult();
});