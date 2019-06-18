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

// default task
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

// exporting should be the primary registration mechanism of tasks
exports.default = defaultTask;

// immediate composition
const seriesBuild = require("./seriesBuild");
const parallelBuild = require("./parallelBuild");
exports.seriesBuild = seriesBuild.build;
exports.parallelBuild = parallelBuild.build;

const { series } = require("gulp");

function minify(cb) {
  // body omitted
  cb();
}

function transpile(cb) {
  // body omitted
  cb();
}

function livereload(cb) {
  // body omitted
  cb();
}

if (process.env.NODE_ENV === "production") {
  exports.build = series(transpile, minify);
} else {
  exports.build = series(transpile, livereload);
}

// nesting series and parallel
const nesting = require("./nesting");
exports.nesting = nesting.build;

// referencing a task
const referenced = require("./referenced");
exports.referenced = referenced.build;

// Returning a stream
const streamTask = require("./streamTask");
exports.streamTask = streamTask.build;

// Returning a promise
function promiseTask() {
  return Promise.resolve("the value is ignored");
}

exports.promiseTask = promiseTask;

const eventEmitterTask = require("./eventEmitterTask");
exports.eventEmitterTask = eventEmitterTask.build;

// Working synchronously
const asyncAwaitTask = require("./asyncAwaitTask");
exports.asyncAwaitTask = asyncAwaitTask.build;
