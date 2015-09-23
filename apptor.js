var HttpServer 	= require('./lib/http_server');

var Apptor = module.exports = function() {
	if (!(this instanceof Apptor)) {
    return new Apptor();
  }

	this._httpServer = new HttpServer({port: 3000});	
	this._modules = [];
};

Apptor.prototype.use = function(Module) {
	var module = new Module(this);
	this._modules.push(module);
};

