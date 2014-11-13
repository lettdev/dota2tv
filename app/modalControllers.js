var modalControllers = angular.module('modalControllers', ['ui.bootstrap']);

modalControllers.controller('addChannelController', ['$scope', '$modalInstance',
	function ($scope, $modalInstance) {
	  $scope.ok = function () {
	    $modalInstance.close();
	    alert('fuckfuckfuck');
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);

modalControllers.controller('viewChannelController', ['$scope', '$modalInstance',
	function ($scope, $modalInstance) {
	  $scope.ok = function () {
	    $modalInstance.close();
	    alert('fuckfuckfuck');
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);