var dota2tvDirectives = angular.module('dota2tvDirectives', []);

dota2tvDirectives.directive('channelsList', 
function () {
  return {
    restrict: 'E',
    replace: 'true',
    templateUrl: 'app/views/channelsList.html'
  };
});