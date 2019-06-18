const { src, dest, series, parallel } = require("gulp");

const gulpif = require("gulp-if");
const log = require("fancy-log");
const csscss = require("gulp-csscss");
const parker = require("gulp-parker");
const plumber = require("gulp-plumber");

const { onError } = require("./utils");
const pkg = require("../package.json");
/**
 * @desc test CSS
 */
function metrics(cb) {
  src(pkg.paths.compiledCSS.src)
    .pipe(
      plumber({
        errorHandler: onError
      })
    )
    .pipe(parker());

  // src(pkg.paths.rawSASS.src)
  //   .pipe(
  //     plumber({
  //       errorHandler: onError
  //     })
  //   )
  //   .pipe(csscss());

  cb();
}

exports.build = metrics;
