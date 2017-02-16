'use strict';

/**
 * @ngdoc function
 * @name notificator.controller:NotifyCtrl
 * @description
 * # NotifyCtrl
 * Controller of the notificator
 */
angular.module('notificator')
  .factory('NotifyData', ['$websocket', '$rootScope',  function  notifyDataFactory ($websocket, $rootScope) {
      // Open a WebSocket connection
      var dataStream = $websocket('ws://127.0.0.1:1337');

      var collection = [];
      var notify = function() {
            $rootScope.$emit('notifying-service-event');
      };

      dataStream.onMessage(function(message) {
      	// console.log(message);
        collection.push(JSON.parse(message.data));
        notify();
      });
 
      var methods = {
        collection: collection,
        get: function() {
          dataStream.send(JSON.stringify({ action: 'get' }));
        },
        subscribe: function(scope, callback) {
            var handler = $rootScope.$on('notifying-service-event', callback);
            scope.$on('$destroy', handler);
        },
      };
      return methods;
  }]);
