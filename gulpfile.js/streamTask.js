// Returning a stream
const { src, dest } = require("gulp");

function streamTask() {
  // stream files ending in ".js" to the 'output' folder
  // return to signal async completion
  return (
    src("*.js")
      // pipe() method for chaining Transform or Writable streams
      // dest() is given an output directory string and also produces a Node stream which is generally used as a terminator stream.
      .pipe(dest("output"))
  );
}

exports.build = streamTask;
