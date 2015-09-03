var gulp  = require('gulp');
var mocha = require('gulp-mocha-co');
var exit = require('gulp-exit');

var path  = require('path'),
    fs    = require('fs');

require('./live');

//gulpfile.js
gulp.task('mocha', function(){
  process.env.PORT = 8001;
  gulp.src(['test/**/*-spec.js'])
    .pipe(mocha({
      reporter: 'nyan'
    }))
    .pipe(exit());
});


gulp.task('mocha', function {
  process.env.PORT = 8001;
  return gulp.src([...])

//gulpfile.js
gulp.task('watch', function() {
    gulp.watch(
      ['lib/**/*.js', 'test/**/*.js'], //blurbs of files to watch
      ['mocha'] //tasks to run when the above files change
  );
});

gulp.task('test-once', function() {
  gulp.tasks.mocha.fn().pipe(exit());
});

gulp.task('default', ['nodemon', 'mocha', 'watch']);
