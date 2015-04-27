// Include Gulp
var gulp = require('gulp');

// Include Plugins
var jshint = require('gulp-jshint');

// JS Lint Task
gulp.task('lint', function() {
	return gulp.src('./src/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// Watch files for changes
gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['lint']);
});

// Default task
gulp.task('default', ['lint', 'watch']);

