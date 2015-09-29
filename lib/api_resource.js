var request = require('request');

APIresource = module.exports = function(source) {
	console.log(source);
	this._apiSource = source;
};

APIresource.prototype.getRegistredSensors = function(cb) {
	var options = { url: 'http://zettor.sin.cvut.cz:8080/registered_sensors',
              		method: 'GET'}

    request(options, function(error, response, body) {
    	if(response.statusCode == 200 && !error) {
            cb(response.body);
    	}else {
    		console.log("Error or no 200 code")
    		cb(null);
    	}
    });


};

APIresource.prototype.getSensor = function(uuid, from, to, limit, cb) {
	if(uuid === undefined) {
		return this.getRegistredSensors();
	}else  {
		var options = { url: 'http://zettor.sin.cvut.cz:8080/registered_sensors/'+uuid,
              		method: 'GET'}

        if(from) {
        	options.qs.from = from;
        }

        if(to) {
        	options.qs.to = to;
        }

        if(limit) {
        	options.qs.limit = limit;
        }

        console.log(options);

    request(options, function(error, response, body) {
    	if(response.statusCode == 200 && !error) {
    		cb(response.body);
    	}else {
    		console.log("Error or no 200 code")
    		cb(null);
    	}
    });
	}
};

APIresource.prototype.getData = function(uuid, access, token) {

};

APIresource.prototype.getHubs = function() {
	//Get all the hubs
};

APIresource.prototype.getHub = function(uuid) {
	if(uuid === undefined) {
		//return all the hubs
	}else {

	}
};