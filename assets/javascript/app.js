// api key 29vtt7W1RJuvNa9JG9mhtfGlYQGIa23D
// &begin_date=20120101&end_date=20120101

var search = "sports"
var number = 20
var start = "";
var end = "";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=29vtt7W1RJuvNa9JG9mhtfGlYQGIa23D"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})