const { src, dest, series, parallel } = require("gulp");

const autoprefixer = require("autoprefixer");
const gulpif = require("gulp-if");
const log = require("fancy-log");
const postcss = require("gulp-postcss");
const reporter = require("postcss-reporter");
const sass = require("gulp-sass");
const size = require("gulp-size");
const sourcemaps = require("gulp-sourcemaps");
const stylelint = require("stylelint");
const syntax_scss = require("postcss-scss");

const devBuild = process.env.NODE_ENV !== "production";
const pkg = require("../package.json");
const { arg } = require("./utils");

let sassConfig = {
  style: "nested",
  comments: false
};

const testFile = arg.file !== null ? arg.file : pkg.paths.stylesheets.src;

/**
 * @desc compile sass files and minify, and reload browser
 */
function css(cb) {
  const postCssOpts = [autoprefixer()];

  if (!devBuild) {
    sassConfig.style = "compressed";
    sassConfig.comments = false;
  }

  src(pkg.paths.stylesheets.src)
    .pipe(gulpif(devBuild, sourcemaps.init()))
    .pipe(
      sass({
        outputStyle: sassConfig.style,
        imagePath: "images/",
        sourceComments: sassConfig.comments,
        errLogToConsole: true
      }).on("error", log)
    )
    .pipe(postcss(postCssOpts))
    .pipe(
      gulpif(
        devBuild,
        sourcemaps.write("maps", {
          includeContent: true
        })
      )
    )
    .pipe(dest("css"))
    .pipe(size());

  cb();
}

function cssAnalyse(cb) {
  src(testFile).pipe(
    postcss([stylelint(), reporter()], {
      syntax: syntax_scss
    })
  );

  cb();
}

exports.build = css;

exports.analyse = cssAnalyse;
