// Returning an event emitter
const { EventEmitter } = require("events");

function eventEmitterTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit("finish"), 250);
  return emitter;
}

exports.build = eventEmitterTask;
