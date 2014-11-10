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

// Service for Channels data
dota2tv.factory('dota2tvChannel', function($q, $timeout, $http) {
    var d2tvChannel = {
        fetch: function() {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get('app/channels.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        }
    }
    return d2tvChannel;
});

// Additionerino Functionerino
function checkChannelSignal(cData) {
  for (i = 0; i < cData.length; i++) {
    (function (i) {
      // Check Twitch stream
      switch (cData[i].host) {
        case 'tw':
          $.ajax({
            url: "https://api.twitch.tv/kraken/streams/" + cData[i].id + ".json?callback=?",
            async: false,
            dataType: 'json',
            success: function(c) {
              if (c.stream == null) {
                cData[i].status = 'Offline';
                cData[i].description = '';
              } else {
                cData[i].status = 'Online';
                cData[i].description = c.stream.channel.status;
              }
            }
          });
          break;
        default:
          cData[i].status = 'Unknown';
          cData[i].description = '';
      }
    })(i);  
  }  
}