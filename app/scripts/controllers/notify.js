'use strict';

/**
 * @ngdoc function
 * @name notificator.controller:NotifyCtrl
 * @description
 * # NotifyCtrl
 * Controller of the notificator
 */
angular.module('notificator')
  .controller('NotifyCtrl', ['$scope', 'NotifyData', function ($scope, NotifyData) {
    $scope.date = new Date(); 
    NotifyData.get(); 
    NotifyData.subscribe($scope, function somethingChanged() {
	    let msgData = NotifyData.collection[0];
	    let msgArray= msgData.assigned;
	    let numTask = 0;
		let numNotify = 0;
		let numRemind = 0;
		for (let i = 0; i < msgArray.length; i = i +1) {
			switch(msgArray[i].type) {
				case 'task': numTask = numTask + 1;
					break;
				case 'notification': numNotify = numNotify + 1;
					break;
				case 'reminder': numRemind = numRemind + 1;
					break;
				}
			}
		$scope.numTask = numTask;
		$scope.numNotify = numNotify;
		$scope.numRemind = numRemind;
	    
	    $scope.msgData  = msgData;
    });
  }]);
