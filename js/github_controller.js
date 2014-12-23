// myApp
// $scope = $rootScope.$new();
// us@fullstack.io | ari@fullstack.io
angular.module('myApp', [])
.controller('HomeController', function($scope) {
    $scope.name = 'Ari';

    $scope.checkAnswer = function(){
      if ($scope.result) {
        $scope.correctAnswer = $scope.result == $scope.first + $scope.second;
        $scope.answerChecked = true;
      } else {
        $scope.answerChecked = false;
      }
    }
})
.service('GithubService', function($http) {
  this.search = function(q) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/search/repositories',
      params: {
        q: q
      }
    }).then(function(resp) {
      return resp.data;
    });
  };
})
.controller('GithubController', 
  function($scope, GithubService) {
    $scope.search = function() {
      // Run the search on github
      // and place results in `results`
      GithubService.search($scope.q)
        .then(function(data) {
          $scope.total_result_count = data.total_count;
          $scope.results = data.items;
        });
    }
});