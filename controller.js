 angular.module('movie', []).factory('$movie', ['$http',
function($http) {
return {
search: function(api_key, query, page_limit) {
var method = 'JSONP';
var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?";
return $http({
method: method,
url: url + "apikey=" + api_key +
"&q=" + query +// Should I encode query to web stuff or is that taken care of?
"&page_limit=" + page_limit + '&callback=JSON_CALLBACK'
});
}
};
}
]);
