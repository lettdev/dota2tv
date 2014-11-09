/**
*  Module
*   DIRECTIVES
* Description
*/
var dota2tvDirectives = angular.module('dota2tvDirectives', []);

    dota2tvDirectives.directive('channels-list', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/views/channelsList.html'
      };
    });