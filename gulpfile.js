/*global require*/
var gulp = require("gulp");
var $ = require("gulp-load-plugins")({lazy: true});
var args = require("yargs").argv;

/**
 *  GLOBAL FUNCTIONS
 */

var log = function(message) {

	"use strict";

	$.util.log($.util.colors.green(message));

};

/**
 *  TASKS
 */

gulp.task("temp", function() {

	"use strict";

	log("Starting temp");

	return gulp
		.src([
			"./**/*.js"
		])
		.pipe($.if(args.verbose, $.print()))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failOnError());

});
