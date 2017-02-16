'use strict';

/**
 * @ngdoc overview
 * @name notificator
 * @description
 * # notificator
 *
 * Main module of the application.
 */
angular
  .module('notificator', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ui.bootstrap',
    'ngWebSocket'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notify', {
        templateUrl: 'views/notify.html',
        controller: 'NotifyCtrl',
        controllerAs: 'notify'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
