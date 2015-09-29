var express = require('express');

var HttpServer = module.exports = function(config) {
	this._port = config.port;
	this._dirname = config.dir;
	this.app = express();

	this.run();

};

HttpServer.prototype.run = function() {
	var server = this.app.listen(this._port, function() {
		console.log("HTTP Server running on port: "+server.address().port);
	});
};

HttpServer.prototype.route = function(uri, path) {
	var self = this;
	this.app.get(uri, function(req, res) {
		res.sendFile(path);
	});
};

HttpServer.prototype.files = function(uri, path) {
	this.app.use(uri, express.static(path));
};