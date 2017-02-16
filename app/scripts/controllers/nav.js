'use strict';

/**
 * @ngdoc function
 * @name notificator.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the notificator
 */
angular.module('notificator')
  .controller('navCtrl', ['$scope', '$location', function ($scope, $location)  { 
    $scope.isActive = function (viewLocation) { 
        return (viewLocation === $location.path())? 'active': '';
    };
  }]);
