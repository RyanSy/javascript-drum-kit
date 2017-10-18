var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var pump = require('pump');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('move files', function() {
  return gulp.src(['public/index.html', 'public/img/*.*', 'public/sounds/*.*', 'server.js', 'package.json'], {base: './'})
    .pipe(gulp.dest('dist'));
});

gulp.task('clean css', function() {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/public/css'));
});

gulp.task('uglify js', function(cb) {
  pump([
      gulp.src('public/js/*.js'),
      babel({
        presets: ['es2015']
      }),
      uglify(),
      gulp.dest('dist/public/js')
    ],
    cb
  );
});

gulp.task('default', ['move files', 'clean css', 'uglify js']);
