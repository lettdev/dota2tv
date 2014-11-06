var modalControllers = angular.module('modalControllers', ['ui.bootstrap']);

modalControllers.controller('addChannelController', ['$scope', '$modalInstance',
	function ($scope, $modalInstance) {
	  $scope.ok = function () {
	    $modalInstance.close();
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);