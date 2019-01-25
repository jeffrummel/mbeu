var project = require('./_project.js')
var gulp    = require('gulp')
var sass    = require('gulp-sass')

gulp.task('styles', function() {
  return gulp.src(project.src + '/scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(project.dest + '/css'))
})