/*global module require*/
module.exports = function() {

	"use strict";

	var dist = "./public/";
	var src = "./src/";
	var clientsrc = src + "client/";
	var serversrc = src + "server/";
	var clientdist = dist + "client/";
	//var serverdist = dist + "server/";
	var tmp = "./tmp/";
	var port = 3000;
	var url = "http://localhost";

	var client = {
		src: {
			js: clientsrc + "js/*.js",
			css: clientsrc + "css/*.css",
			html: clientsrc + "html/"
		},
		dist: {
			js: clientdist + "js/",
			css: clientdist + "css/",
			html: clientdist + "html/"
		}
	};
	var server = {
		src: {
			js: clientsrc + "js/*.js",
			css: clientsrc + "css/*.css",
			html: clientsrc + "html/"
		},
		dist: {
			js: clientdist + "js/",
			css: clientdist + "css/",
			html: clientdist + "html/"
		}
	};

	var nodeServer = serversrc + "js/app.js";

	var config = {
		client: client,
		server: server,
		toLint: [
			"./gulpfile.js",
			"./gulp-config.js",
			client.src + "js/*.js"
		],
		bower: {
			json: require("./bower.json"),
			directory: "./bower_components/",
			ignorePath: "../.."
		},
		index: src + "html/index.html",
		tmp: tmp,
		nodeOptions: {
			script: nodeServer,
			delay: 1,
			env: {
				"PORT": port,
				"URL": url
			}
		}
	};

	config.wiredepOptions = {
		bowerJson: config.bower.json,
		directory: config.bower.directory,
		ignorePath: config.bower.ignorePath
	};

	return config;
};
