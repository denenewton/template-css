// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();


// Sass Task
function scssTask() {
  return src('src/scss/styles.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('assets/css', { sourcemaps: '.' }));
}


// JavaScript Task
function jsTask() {
  return src('src/js/**/*.js', { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(dest('assets/js', { sourcemaps: '.' }));
}


function copyImage() {
   return src('src/img/*.{jpg,png}')
         .pipe(dest('assets/img'));
} 
function copyHTML() {
  return src('./*.html')
    .pipe(dest('assets'));
} 


// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch('*.html', copyHTML, browserSyncReload);
  watch('src/img/*.{jpg,png}', copyImage);
  watch(
    ['src/scss/*.scss', 'src/js/**/*.js'],
    series(scssTask, jsTask, browserSyncReload)
  );
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, copyImage,
 copyHTML, browserSyncServe, watchTask);

// Build Gulp Task
exports.build = series(scssTask, jsTask, copyImage, copyHTML);
