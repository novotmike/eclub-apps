var Apptor = require('./apptor');
var snakeApp = require('snake-app');

var apptor = new Apptor();
	apptor.api("http://147.32.110.50:8080");
	apptor.use(snakeApp);
