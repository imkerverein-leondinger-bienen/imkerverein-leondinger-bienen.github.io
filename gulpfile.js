var gulp = require("gulp");
var concat = require("gulp-concat");
var del = require("del");

gulp.task("clean", function () {
    del.sync(["scripts/*.js"]);
    del.sync(["styles/*.css"]);
});

var vendorScripts = ["node_modules/jquery/dist/jquery.js", "node_modules/bootstrap/dist/js/bootstrap.js"];
var vendorStyles = ["node_modules/bootstrap/dist/css/bootstrap.css"];
var appStyles = ["sass/*.*"];

// Combine and minify all scripts from the bower_components folder
gulp.task("scriptsAndStyles", [], function () {
    gulp.src(vendorScripts)
		.pipe(concat("vendor.js"))
		.pipe(gulp.dest("scripts/"));

    gulp.src(vendorStyles)
		.pipe(concat("vendor.css"))
		.pipe(gulp.dest("styles/"));

    gulp.src(appStyles)
		.pipe(concat("app.css"))
		.pipe(gulp.dest("styles/"));
});

//Set a default tasks
gulp.task("default", ["clean", "scriptsAndStyles"], function () { });