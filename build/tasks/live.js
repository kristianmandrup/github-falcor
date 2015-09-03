//gulpfile.js
var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    env: {PORT: 8000},
    nodeArgs: ['--harmony']
  }).on('restart');
})
