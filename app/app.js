'use strict';

// Declare app level module which depends on views, and components
angular.module('crypto', [
  'ngRoute',
  'crypto.home',
  'crypto.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
