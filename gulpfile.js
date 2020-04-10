const { series, src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');


function minifyHtml() {
  return src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true }))
        .pipe(dest('dist/'));
}

function minImages(){
  return src('./src/img/**/*.+(png|jpg|jpeg|svg)')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

function moveFonts() {
  return src('./src/fonts/**/*')
        .pipe(dest('dist/fonts'));
}

exports.build = series(minImages, moveFonts, minifyHtml);
exports.minifyHtml = minifyHtml;
exports.minImages = minImages;
exports.moveFonts = moveFonts;