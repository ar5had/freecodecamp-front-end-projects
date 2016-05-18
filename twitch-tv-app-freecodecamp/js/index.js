$(document).ready(function(){
  var results = $('#resultArea');
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin", "comster404","esl_sc2","ogamingsc2"];
  var url = "";
  var status = "";
  var link = "";
  var channelLink = "";
  var img = "";
  var channelName = "";

  var displayResults = function(name){
    url = "https://api.twitch.tv/kraken/streams/"+name;
    status = "";
    link = "";
    channelLink = "";
    img = "";
    channelName = name;
    //alert(url)
    $.getJSON(url,function(json){
      //alert(url);
      if(!json.status){
        if(json.stream)
          status = "Streaming: "+json.stream.game;
        else
          status = "Offline";
        link = json._links.channel;
        //alert(link)
        $.getJSON(link,function(channelJson){
          channelName = channelJson.display_name;
          img = channelJson.logo;
          channelLink = channelJson.url;
          //display part starts here
          var superElem = $("<div>").attr("class","row");
          var elem = $("<div>");

          elem.attr("class","col-xs-12 col-md-12")
         if(img) elem.append($('<div>').attr("class","col-xs-2 col-md-2").append($('<img>').attr({src:img})));
          else
            elem.append($('<div>').attr("class","col-xs-2 col-md-2").append($('<img>').attr({src:"http://s19.postimg.org/qygpcxncj/unknown.png"})));
          var nameWithLink =$('<div>').attr("class","col-xs-10 col-md-5").append();
          var nameLink = $('<a>').attr({href:channelLink,target:"_blank"});
          nameLink.append($('<p>').text(channelName));
          elem.append(nameWithLink.append(nameLink));
          elem.append($('<div>').attr("class","col-xs-10 col-md-5").append($('<p>').text(status)));
          superElem.append(elem);
          results.append($('<li>').append(superElem));
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

  function getResults(){
    for(var index in users){
      displayResults(users[index]);
    }
    return true;
  }//ends Display Result
  getResults();
  setTimeout(
    function(){
     var fimg = $('<img>').attr({src:"http://s19.postimg.org/5g4p3n90z/claping_hands.png",class:"flogo"});
     var footerText = $('<h2>').append(fimg);
     footerText.append($('<span>').text("th-th-th-that's all folks!"));
     $("footer").append(footerText);
    },2000);
});
