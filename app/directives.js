var dota2tvDirectives = angular.module('dota2tvDirectives', []);

dota2tvDirectives.directive('channelsList', 
function () {
  return {
    restrict: 'E',
    replace: 'true',
    template: 'Hello boy!'
  };
});