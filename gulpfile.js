const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function compStyles() {
    return gulp.src('./src/styles/*scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function compImg() {
    return gulp.src('./src/img/**/*', {encoding: false})
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

exports.default = gulp.parallel(compStyles, compImg, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*scss', gulp.parallel(compStyles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}