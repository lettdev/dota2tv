var dota2tvControllers = angular.module('dota2tvControllers', ['ngSanitize']);

dota2tvControllers.controller('HomepageCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

dota2tvControllers.controller('WatchpageCtrl', ['$scope', '$http', '$routeParams', '$sce', 
  function ($scope, $http, $routeParams, $sce) {
  	switch($routeParams.streamService) {
  		case "tw":
  			$scope.streamVid = $sce.trustAsHtml('<iframe src="http://www.twitch.tv/' + $routeParams.streamID + '/embed" frameborder="0" scrolling="no" height="100%" width="100%"></iframe>');
  			$scope.streamChat = $sce.trustAsHtml('<iframe src="http://www.twitch.tv/' + $routeParams.streamID + '/chat?popout=" frameborder="0" scrolling="no" height="100%" width="280"></iframe>');
  			break;
  	};
  }]);