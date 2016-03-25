var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var colorguard = require('gulp-colorguard');

gulp.task('styles', function() {
   var processors = [
         autoprefixer({browsers: ['last 2 versions']}),
         colorguard
       ];
  
  gulp.src('sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(postcss(processors))
      .pipe(gulp.dest('./css/'));
});

// watch task
gulp.task('default', function() {
   gulp.watch('sass/**/*.scss', ['styles']);
});