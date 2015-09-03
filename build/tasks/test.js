var gulp  = require('gulp');
var mocha = require('gulp-mocha-co');
var exit = require('gulp-exit');

var path  = require('path'),
    fs    = require('fs');

var TESTS_PATH = './test/';
var specWriter = function (typeOfTest) {
    var template = [];
    fs.readdir(path.join(TESTS_PATH, typeOfTest) , function (err, files) {
        for (var i = 0; i < files.length; i++) {
            template.push('require("./' + typeOfTest + '/');
            template.push(files[i].replace('.js', ''));
            template.push('");\r\n');
        };
        var specs = template.join('');
        fs.writeFile(TESTS_PATH + typeOfTest + '_specs.js', specs, function (err) {

        });
    });
};

// writes a file test/unit_specs.js before running tests
gulp.task('unit-specs', function () {
    specWriter('unit');
});

gulp.task('node-test', ['unit-specs'], function () {
    gulp.src('/test/unit_specs.js')
      .pipe(mocha({reporter: 'spec'}))
      .on('error', function (err) {
          console.log(err.toString());
          this.emit('end');
      });
});

gulp.task('package', function () {
    //do anything required to package scripts for the browser
});

gulp.task('test', ['node-test']);
