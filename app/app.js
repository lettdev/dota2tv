var dota2tv = angular.module('dota2tv', [
'ngRoute',
'dota2tvControllers'
]);

dota2tv.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomepageCtrl'
      }).
      when('/watch/:streamID', {
        templateUrl: 'app/views/watch.html',
        controller: 'HomepageCtrl'
      }).
      otherwise({
        redirectTo: '/404'
      });
  }]);