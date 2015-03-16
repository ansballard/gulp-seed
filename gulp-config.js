/*global module*/
module.exports = function() {

	"use strict";

	var config = {
		src: {
			js: "./src/js/*.js",
			css: "./src/css/*.css"
		},
		dist: {
			js: "./dist/js",
			css: "./dist/css"
		},
		toLint: [
			"./gulpfile.js",
			"gulp-config.js"
		],
		tmp: "./tmp/"
	};

	return config;
};
