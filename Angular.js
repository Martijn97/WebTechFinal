angular.module('InstaCheck', ['ui.router'])
.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider.state('home',{
			url: '/home',
			templateUrl: '/home.html',
		});

		$stateProvider.state('about',{
			url: '/about',
			templateUrl: '/about.html',
		});

		$stateProvider.state('help',{
			url: '/help',
			templateUrl: '/help.html',
		});
		$stateProvider.state('admin',{
			url: '/admin',
			templateUrl: '/admin.html',
		});

	$urlRouterProvider.otherwise('home');
}])


