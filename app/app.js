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

dota2tv.directive('channelsList', ['', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: 'FUCK YOU BABY!',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      
    }
  };
}]);