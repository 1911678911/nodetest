'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {templateUrl: 'views/tpl/welcome.html', controller: 'WelcomeCtrl'})
	.when('/hello',{
		templateUrl: 'views/tpl/hello.html', controller: 'HelloCtrl'	
	})
	.when('/student',{
		templateUrl: 'views/tpl/student.html', controller: 'StudentCtrl'	
	})
	.when('/onlogin',{
		templateUrl: 'views/tpl/onlogin.html', controller: 'onloginCtrl'	
	})
	.when('/getlogin',{
		templateUrl: 'views/tpl/getlogin.html', controller: 'getloginCtrl'	
	})
	.otherwise({redirectTo: '/'});
	$locationProvider.html5Mode(true);
}]);


app.factory('UserService', [  
	'$http',  
	function($http) {  
		var runLogin = function(user) {  
			$http({  
				method: 'GET',  
				url: '/userlist',  
				data: {  
					user: user  
				}  
			}).success(function(data) { 
				console.log('success'); 
			});  
		};  

		return {  
			runLogin: runLogin  
		};  
	}  
	]);

app.controller('onloginCtrl', [  
	'$scope',  
	'UserService',  
	function($scope, UserService) {  
		$scope.onLogin = function(user) {  
			UserService.runLogin(user);  
		};  
	}  
	]);  


//provider
app.provider('UserServiceP', {  
	self: this,  
	setName:function(name) {  
		self.name = name;  
	},  
	$get: function() {  
		return {  
			getName: function() {  
				return self.name;  
			}  
		};  
	}  
});  

app.config(function(UserServicePProvider) {  
	UserServicePProvider.setName('Lucy');  
});  

app.controller('getloginCtrl', [  
	'$scope',  
	'UserServiceP',  
	function($scope, UserServiceP) {  
		$scope.getLogin = function() {  
			alert(UserServiceP.getName());  
		};  
	}  
	]); 