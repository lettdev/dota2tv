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
  	// ---- Display stream ---- //
  	switch($routeParams.streamService) {
  		// Twitch.tv
  		case "tw":
  			$scope.streamVid = $sce.trustAsHtml('<iframe src="http://www.twitch.tv/' + $routeParams.streamID + '/embed" frameborder="0" scrolling="no" height="100%" width="100%"></iframe>');
  			$scope.streamChat = $sce.trustAsHtml('<iframe src="http://www.twitch.tv/' + $routeParams.streamID + '/chat?popout=" frameborder="0" scrolling="no" height="100%" width="280"></iframe>');
  			break;
  		// Csmtalk
  		case "cc":
  			$scope.streamVid = $sce.trustAsHtml('<iframe frameborder="0" scrolling="no" src="http://talktv.vn/streaming/play/embed/' + $routeParams.streamID + '" height="100%" width="100%"></iframe>');
  			$scope.streamChat = $sce.trustAsHtml('<iframe frameborder="0" scrolling="no" src="http://talktv.vn/streaming/chat/embed/' + $routeParams.streamID + '" height="100%" width="280"></iframe>');
  			break;
  		// Dailymotion
  		case "dm":
  			$scope.streamVid = $sce.trustAsHtml('<iframe frameborder="0" width="100%" height="100%" src="//www.dailymotion.com/embed/video/' + $routeParams.streamID + '" allowfullscreen></iframe>');
  			$scope.streamChat = $sce.trustAsHtml('<iframe frameborder="0" scrolling="no" id="live_chat" src="http://www.dailymotion.com/livechat/' + $routeParams.streamID + '" style="background:#fff;" height="100%" width="100%" allowfullscreen=""></iframe>');
  			break;
  		// Hitbox
  		case "hb":
  			$scope.streamVid = $sce.trustAsHtml('<iframe width="100%" height="100%" src="http://hitbox.tv/#!/embed/' + $routeParams.streamID + '" frameborder="0" allowfullscreen></iframe>');
  			$scope.streamChat = $sce.trustAsHtml('<iframe width="100%" height="100%" src="http://www.hitbox.tv/embedchat/' + $routeParams.streamID + '" frameborder="0" allowfullscreen></iframe>');
  			break;
  	};
  	// ---- End display stream ---- //
  	// ---- Show/Hide Comments ---- //
  	$scope.changeClass = function () {
        	alert("test");
    };
  }]);