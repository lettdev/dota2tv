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
        templateUrl: 'app/views/watch.html',
        controller: 'WatchpageCtrl'
      }).
      otherwise({
        redirectTo: '/404'
      });
  }]);

dota2tv.directive('channelsList', function() {
  return {
    restrict    : 'E',  // used E because of element 
    templateUrl : 'app/views/channelsList.html'
  };
});