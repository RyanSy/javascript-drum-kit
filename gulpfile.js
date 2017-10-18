var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var pump = require('pump');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('html', function() {
  return gulp.src('public/index.html')
    .pipe(gulp.dest('dist/public'));
});

gulp.task('css', function() {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/public/css'));
});

gulp.task('js', function(cb) {
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

gulp.task('img', function() {
  return gulp.src('public/img/*.*')
    .pipe(gulp.dest('dist/public/img'));
});

gulp.task('sounds', function() {
  return gulp.src('public/sounds/*.*')
    .pipe(gulp.dest('dist/public/sounds'));
});

gulp.task('server', function() {
  return gulp.src('server.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('package.json', function() {
  return gulp.src('package.json')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['html', 'css', 'js', 'img', 'sounds', 'server', 'package.json']);
