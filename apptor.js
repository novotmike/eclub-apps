var HttpServer 	 = require('./lib/http_server');
var ApiResource  = require('./lib/api_resource');
var Events = require('events');

var Apptor = module.exports = function() {
  	this._eventEmitter = new Events.EventEmitter();
	this._httpServer = new HttpServer({port: 3000});	
	this._modules = [];
	this._apiResource = undefined;
};

Apptor.prototype.use = function(Module) {
	var module = new Module(this);
	this._modules.push(module);
};

Apptor.prototype.api = function(source) {
	this._apiResource = new ApiResource(source);
};

