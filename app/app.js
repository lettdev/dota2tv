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

dota2tv.factory('dota2tvChannel', function($q, $timeout, $http) {
    var d2tvChannel = {
        fetch: function() {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get('channels.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        }
    }

    return d2tvChannel;
});