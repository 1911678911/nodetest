'use strict';

function WelcomeCtrl($scope){
	$scope.username = 'Conan_Z';
}

function HelloCtrl($scope){
	console.log("zmx");
	$scope.menuState={show:false};
	$scope.toggleMenu = function() {
		$scope.menuState.show = !$scope.menuState.show;
	};
}

function StudentCtrl($scope,$http){
	console.log('student');
	$scope.students = [];
	$http.get('data.txt').
	success(
		function(data,status,headers,config){
			$scope.students = data.students;	
		}
		).error(
		function(data,status,headers,config){
			console.log('error');
		}
		);
	};

