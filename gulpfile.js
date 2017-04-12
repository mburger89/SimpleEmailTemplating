var gulp = require('gulp');
var serve = require('gulp-serve');
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync').create();

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
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
    })
})

gulp.task('watch', ['browserSync', 'build'], function() {
    gulp.watch('app/templating/partials/**/*.+(html|nunjucks)', ['build']);
    gulp.watch('app/templating/**/*.+(html|nunjucks)', ['build']);
    gulp.watch('app/pages/**/*.+(html|nunjucks)', ['build']);
});