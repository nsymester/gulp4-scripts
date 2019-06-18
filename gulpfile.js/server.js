const { src, dest, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

const isWin = process.platform === "win32";

/**
 * @desc browserSync, start the server
 */
function fBrowserSync(cb) {
  // check for operating system
  //  - for WINDOWS 10 use "Chrome"
  //  - for MAC OS X use "Google Chrome"
  let browser = isWin ? "Chrome" : "Google Chrome";
  browserSync.init({
    server: {
      directory: true
    },
    proxy: "staging.towergateinsurance.co.uk",
    browser: browser,
    open: false
  });

  cb();
}

exports.server = fBrowserSync;
