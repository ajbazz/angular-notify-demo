'use strict';
/*
 * NOTE: ng-href is not working. This is a known issue
 * TODO: find workaround for href problem
 */

angular.module('notificator')
	.component('assignedTasks', {
	  templateUrl: '/scripts/components/templates/tasks.html',
	  controller: function () {
	  	this.$doCheck = function () {
			if (this.data && typeof this.data !== 'object') {
				let json  = (JSON.parse(this.data)).assigned;
				this.data = json;
			}
		};
	  },
	  bindings: {
	    data: '@'
	  }
	});