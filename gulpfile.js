/*global require*/
var gulp = require("gulp");
var wiredep = require("wiredep").stream;
var args = require("yargs").argv;
var del = require("del");

var $ = require("gulp-load-plugins")({lazy: true});

var config = require("./gulp-config")();

/**
 *  GLOBAL FUNCTIONS
 */

var log = function(message, color) { "use strict";
	color = color || "green";
	if(typeof message === "object") {
		for(var item in message) {
			if(message.hasOwnProperty(item)) {
				$.util.log($.util.colors[color](message[item]));
			}
		}
	} else {
		$.util.log($.util.colors[color](message));
	}
};

var clean = function(files, done) { "use strict";
	log("Cleaning: " + files, "red");
	del(files, done);
};

/**
 *  TASKS
 */

gulp.task("lint", function() { "use strict";
	log("Linting: " + config.toLint, "yellow");
	return gulp
		.src(config.toLint)
		.pipe($.if(args.verbose, $.print()))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failOnError())
	;

});

gulp.task("prefix", ["clean-styles"], function() { "use strict";
	log("prefixing css", "yellow");
	return gulp
		.src(config.client.src.css)
		.pipe($.plumber())
		.pipe($.autoprefixer({browsers: ["last 2 version"]}))
		.pipe(gulp.dest(config.tmp))
	;
});

gulp.task("inject", function() { "use strict";
	return gulp
		.src(config.index)
		.pipe(wiredep(config.wiredepOptions))
		.pipe($.inject(gulp.src(config.client.src.js)))
		.pipe($.inject(gulp.src(config.tmp + "*.css")))
		.pipe(gulp.dest(config.client.dist.html))
	;
});

gulp.task("serve-dev", ["inject"], function() { "use strict";
	return $.nodemon(config.nodeOptions);
});

gulp.task("css-watcher", function() { "use strict";
	gulp.watch([config.client.src.css], ["prefix"]);
});

gulp.task("lint-watcher", function() { "use strict";
  gulp.watch([config.toLint], ["lint"]);
});

gulp.task("clean-styles", function(done) { "use strict";
	var files = config.tmp + "*.css";
	clean(files, done);
});
