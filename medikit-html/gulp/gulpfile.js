const { src, dest, watch, gulp, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const browsersync = require('browser-sync');
const server = browsersync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: 'medikit-html/'
    }
  });
  done();
}

function changesass() {
  return src('medikit-html/scss/*.scss')
    .pipe(sass())
    .pipe(dest('medikit-html/css/'));
}

function renamecss() {
  return src('medikit-html/css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(dest('medikit-html/css/'));
}

function renamedcss() {
  return src('medikit-html/css/dashboard.css')
    .pipe(rename('dashboard.min.css'))
    .pipe(dest('medikit-html/css/'));
}

function minifycss() {
  return src('medikit-html/css/style.min.css')
    .pipe(cleanCSS())
    .pipe(dest('medikit-html/css/'));
}

function minifydcss() {
  return src('medikit-html/css/dashboard.min.css')
    .pipe(cleanCSS())
    .pipe(dest('medikit-html/css/'));
}


function watchs() {
  watch('medikit-html/scss/*.scss', series(changesass, renamecss, renamedcss, minifycss, minifydcss, reload));
  watch('medikit-html/*.html', reload);
}

var build = parallel(serve, watchs);
exports.build = build;






