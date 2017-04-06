var gulp = require('gulp');
var serve = require('gulp-serve');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('serve', serve('app'));

gulp.task('build', function() {
  //gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  //Renders template with nunjucks
  .pipe(nunjucksRender({
    path: ['app/templates']
  }))
  //outputs files in app folder
  .pipe(gulp.dest('app'))
});

gulp.task('buildServe', ['build'], serve('app')); 

