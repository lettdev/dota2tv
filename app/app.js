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
      when('/:streamService/:streamID', {
        templateUrl: function(urlattr) {
        	return 'app/views/' + urlattr.streamService + '.html'
        },
        controller: 'WatchpageCtrl'
      }).
      otherwise({
        redirectTo: '/404'
      });
  }]);