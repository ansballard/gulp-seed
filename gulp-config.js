/*global module*/
module.exports = function() {

	"use strict";

	var config = {
		src: {
			js: "./src/js/*.js",
			css: "./src/css/*.css"
		},
		dist: {
			js: "./public/js",
			css: "./public/css"
		},
		toLint: [
			"./gulpfile.js",
			"./gulp-config.js",
			"./src/js/*.js"
		],
		index: "./index.html",
		public: "./public/",
		tmp: "./tmp/"
	};

	return config;
};
