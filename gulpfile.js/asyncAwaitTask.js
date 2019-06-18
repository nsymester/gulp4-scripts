// Working synchronously
const fs = require("fs");

async function asyncAwaitTask() {
  const { version } = fs.readFileSync("./package.json");
  console.log(version);
  await Promise.resolve("some result");
}

exports.build = asyncAwaitTask;
