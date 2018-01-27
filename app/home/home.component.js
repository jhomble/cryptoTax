'use strict';
import { angular } from 'angular';
angular.module('crypto.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.template.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);