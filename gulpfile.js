/*global require*/
var gulp = require("gulp");
var $ = require("gulp-load-plugins")({lazy: true});
var args = require("yargs").argv;

/*
var eslint = require("gulp-eslint");
var util = require("gulp-util");
var gprint = require("gulp-print");
var gif = require("gulp-if");
*/

/**
 *  GLOBAL FUNCTIONS
 */

var log = function(message) {

	"use strict";

	$.util.log($.util.colors.green(message));

};

gulp.task("temp", function() {

	"use strict";

	log("Starting temp");

	return gulp
		.src([
			"./src/app.js"
		])
		.pipe($.if(args.verbose, $.print()))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failOnError());

});
