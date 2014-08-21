angular.module('myapp', [])
.controller('MyController', ['$scope', function($scope) {
console.log("Hello");
$scope.mylocation = "";
if ("geolocation" in navigator) {
  var watchID = navigator.geolocation.watchPosition(function(position) {
  $scope.latitude = position.coords.latitude;
  $scope.longitude = position.coords.longitude;
console.log(position.coords.latitude);
console.log($scope.longitude);
}, function() {}, {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
} );
} else {
  /* geolocation IS NOT available */
}
}]);
