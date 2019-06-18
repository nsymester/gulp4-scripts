/**
 * @desc this task runner will concatenate and minifiy the application's scripts and styles
 * @author Neil Symester neil.symester@towergate.co.uk
 * @todo gulp --help
 */

/*
 * Use `npm scripts` to run the main gulp tasks
 *
 * to run, use:
 * - `npm run start` for the development build
 * - `npm run build` for the roduction build
 */

const { src, dest, series, parallel } = require("gulp");
const css = require("./styles");
const js = require("./scripts");
const metrics = require("./metrics");
const { server } = require("./server");

// const devBuild = process.env.NODE_ENV !== "production";

exports.css = css.build;
exports.cssAnalyse = css.analyse;
exports.metrics = metrics.build;

exports.js = js.build;

exports.build = parallel(css.build, js.build);

exports.watch = series(css.build, js.build);

exports.default = series(parallel(css.build, js.build), server);

exports.server = server;
