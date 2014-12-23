angular.module('myApp', [])
.controller('HomeController', function($scope, $http) {
  $scope.getWeather = function() {
    var url = "http://api.openweathermap.org/data/2.5/"+
              "forecast/daily?mode=json" +
              "&units=imperial&cnt=1" +
              "&callback=JSON_CALLBACK" +
              "&q="
    return $http({
      method: 'JSONP',  // it allows web browser allows passsing a callback .. response is wrapped into callback .. only Get
      url: url + "San Francisco, CA"
    }).then(function(response, status) {
      $scope.weather = response.data;
    });
  }
});