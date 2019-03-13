// api key 29vtt7W1RJuvNa9JG9mhtfGlYQGIa23D

var search = $("#search").val();
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=29vtt7W1RJuvNa9JG9mhtfGlYQGIa23D"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})