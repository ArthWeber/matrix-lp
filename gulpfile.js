const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compStyles() {
    return gulp.src('./src/styles/*scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.parallel(compStyles);
exports.watch = function() {
    gulp.watch('./src/styles/*scss', gulp.parallel(compStyles))
}