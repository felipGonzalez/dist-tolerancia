angular.module('demo',[])
.controller('text', function($scope, $http) {

	$http.get('http://localhost:3000').
	then(function successCallback(response) {
		$scope.texto = response.data;
	}, function errorCallback(response){
		$http.get('http://localhost:3001').
			then(function successCallback(response) {
			$scope.texto = response.data;
		});
	});



});

/*
http://localhost:3000
http://10.4.72.87:3000
*/