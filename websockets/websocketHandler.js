module.exports = function (request) {
  var connection = request.accept(null, request.origin);

  console.log('client connected: ', request.origin);

  connection.on('message', function (message) {
  	console.log(message);
  	
  	message.utf8Data = {
  		assigned: [{
  			type: "task",
	  		when: "Just Now",
	  		msg: "I have a bunch of stuff to give you. For reals!"
	  	},{
  			type: "notification",
	  		when: "Just Now",
	  		msg: "A new schedule has been posted for 2017. ",
	  		linkText: "Schedule",
	  		linkURL: "http://somelink"
	  	},{
  			type: "task",
	  		when: "Yesterday",
	  		msg: "I have a nothing to give you. For reals!"
	  	},{
  			type: "reminder",
	  		when: "Yesterday",
	  		msg: "Don't forget your wife's birthday!"
	  	},{
  			type: "task",
	  		when: "Monday",
	  		msg: "I have a nothing to give you. For reals!"
	  	}]
  	};
  	
    if (message.type === 'utf8') {
      var object = JSON.stringify(message.utf8Data);

      setTimeout(function () {
      	console.log('received:---> ', object);
        connection.sendUTF(object);
      }, 2000);
    }
  });

  connection.on('close', function (connection) {
    console.log('connection closed');
  });
};