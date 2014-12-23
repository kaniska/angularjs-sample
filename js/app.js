// myApp
angular.module('myApp', [])
.run(function($rootScope) {
	$rootScope.name = 'Azat'
})
.controller('HomeController', function($scope){
	$scope.name = 'Ari';
	$scope.first_number = 0;
	$scope.second_number = 0;
	
	$scope.result = 0;

	if($scope.first_number + $scope.second_number = $scope.result) {
		
	}

})

