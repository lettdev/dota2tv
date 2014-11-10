var dota2tvControllers = angular.module('dota2tvControllers', ['ngSanitize', 'ui.bootstrap', 'modalControllers']);

// Main Controller
dota2tvControllers.controller('MainCtrl', ['$scope', '$http', 'dota2tvChannel',
  function ($scope, $http, dota2tvChannel) {
    dota2tvChannel.fetch().then(function(data) {
      $scope.ChannelsData = data;
      checkChannelSignal($scope.ChannelsData.channels);
      console.log($scope.ChannelsData);
    });  
}]);

// Controller for Homepage
dota2tvControllers.controller('HomepageCtrl', ['$scope', '$http',
  function ($scope, $http) {

}]);

// Controller for Watchpage
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
  }]);

// Controller for Watchpage Control
dota2tvControllers.controller('watchControllers', ['$scope', '$modal', 
	function ($scope, $modal) {
		// ---- Enable chat ---- //
  		$scope.chatStatus = true;
	  	// ---- Show/Hide Comments ---- //
	  	$scope.showHideChat = function () {
	        if ($scope.chatStatus == true) {
	        	$scope.chatStatus = false;
	        } else {
	        	$scope.chatStatus = true;
	        }
	    };
	    // ---- Show Add Channel Modal ---- //
	    $scope.showAddChannel = function (size) {
		    var modalInstance = $modal.open({
		      templateUrl: 'app/views/modals/md-addChannel.html',
		      controller: 'addChannelController',
		      size: size
		    });
		};
}]);

// Additionerino Functionerino
function checkChannelSignal(cData) {
  for (i = 0; i < cData.length; i++) {
    (function (i) {
      // Check Twitch stream
      if (cData[i].host == 'tw') {
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
      }
    })(i);  
  }  
}