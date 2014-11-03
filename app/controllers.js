var dota2tvControllers = angular.module('dota2tvControllers', []);

dota2tvControllers.controller('HomepageCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);