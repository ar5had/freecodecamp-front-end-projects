$(document).ready(function(){
  var keyword = "";
  var resultArea = $("#results");
  var searchBar = $("#searchBar");
  var searchButton = $(".glyphicon-search");
  var searchUrl = "https://en.wikipedia.org/w/api.php";
  var displayResults = function(){
    $.ajax({
      url: searchUrl,
      dataType: 'jsonp',
      data: {
        action: 'query',
        format: 'json',
        generator: 'search',
          gsrsearch: keyword,
          gsrnamespace: 0,
          gsrlimit: 10,
        prop:'extracts|pageimages',
          exchars: 200,
          exlimit: 'max',
          explaintext: true,
          exintro: true,
          piprop: 'thumbnail',
          pilimit: 'max',
          pithumbsize: 200
      },
      success: function(json){
        var results = json.query.pages;
        $.map(results, function(result){
          var elem = $('<li>');
          elem.append($('<h3>').text(result.title));
          //if(result.thumbnail) elem.append($('<img>').attr('width',150).attr('src',result.thumbnail.source));
          elem.append($('<p>').text(result.extract));
          resultArea.append(elem);
        });
      }
    });
  };
 /*
  searchBar.autocomplete({
        source: function (request, response) {
            $.ajax({
                url: searchUrl,
                dataType: 'jsonp',
                data: {
                    'action': "opensearch",
                    'format': "json",
                    'search': request.term
                },
                success: function (data) {
                    response(data[1]);
                }
            });
        }
    });
  */
  searchButton.click(function(){
    keyword = searchBar.val();
    resultArea.empty();
    $("#searchBox").animate({'padding-top':"0"}, 600);
    $(".container-fluid").animate({height:"30vh"}, 600);
    displayResults();
  });
});
