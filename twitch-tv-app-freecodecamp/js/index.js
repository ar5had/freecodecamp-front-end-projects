$(document).ready(function(){
  var results = $('#resultArea');
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin", "comster404","esl_sc2","ogamingsc2","channelThatdoesnotExist"];
  var status = [];
  var link = [];
  var channelLink = [];
  var img = [];
  var channelName = [];
  var storeResults = function(name){
    var url = "https://api.twitch.tv/kraken/streams/"+name;
    //alert(url)
    $.ajax({url,success:function(json){

          if(json.stream)
           status.push("Streaming: "+json.stream.game);

          else
            status.push("Offline");

          link.push(json._links.channel);
          //alert(link)
          $.getJSON(link[link.length-1],function(channelJson){
            //alert(JSON.stringify(channelJson))
            channelName.push(channelJson.display_name);
            img.push(channelJson.logo);
            channelLink.push(channelJson.url);

          });

          },
          statusCode: {
          404: function() {
            status.push("Account doesn't exist");
            channelLink.push("undefined");
            channelName.push(name);
            img.push("http://s19.postimg.org/qygpcxncj/unknown.png");
          },
          422: function() {
            status.push("Account closed");
            channelLink.push("undefined");
            channelName.push(name);
            img.push("http://s19.postimg.org/qygpcxncj/unknown.png");
          }

    }});//main get Req ends
    return "successfully returned from getInfo"
  };//storeResults ends
  console.log(channelName.length, channelName);
  //display part starts here
  function displayResults(){
          //console.log(channelName,status,channelLink,img);

  for(var user = 0; user < users.length; user++){

          var superElem = $("<div>").attr("class","row");
          var elem = $("<div>");

          elem.attr("class","col-xs-12 col-md-12")
         elem.append($('<div>').attr("class","col-xs-2 col-md-2").append($('<img>').attr({src:img[user]})));

          var nameWithLink =$('<div>').attr("class","col-xs-10 col-md-5").append();
          var nameLink = $('<a>').attr({href:channelLink[user],target:"_blank"});
          nameLink.append($('<p>').text(channelName[user]));
          elem.append(nameWithLink.append(nameLink));
          elem.append($('<div>').attr("class","col-xs-10 col-md-5").append($('<p>').text(status[user])));
          superElem.append(elem);
          results.append($('<li>').append(superElem));

          }
      }


  function getResults(){
    for(var index in users){
      storeResults(users[index]);
    }
    return true;
  }//getResult ends;
getResults();
displayResults();
setTimeout(
  function(){
   var fimg = $('<img>').attr({src:"http://s19.postimg.org/5g4p3n90z/claping_hands.png",class:"flogo"});
    var footerText = $('<h2>').append(fimg);
    footerText.append($('<span>').text("th-th-th-that's all folks!"));
    $("footer").append(footerText);
  },2000);
});
