var gulp = require('gulp');
var phpunit = require('gulp-phpunit');
var run = require('gulp-run');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('phpunit', function() {
    gulp.src('tests/**/*.php')
        .pipe(run('clear'))
        .pipe(phpunit())
        .on('error', notify.onError({
            title: "Crap",
            message: "Your phpunit tests failed, ThanhNT!",
            icon: __dirname + '/fail.png'
        }))
        .pipe(notify({
            title: "Success",
            message: "All phpunit tests have returned green!"
        }));
});

gulp.task('watch', function() {
    gulp.watch(['tests/**/*.php', 'src/**/*.php'], ['phpunit']);
});

gulp.task('default', ['watch']);