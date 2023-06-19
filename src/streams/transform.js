const process = require("process");
const { Transform } = require("stream");

const transform = () => {
  const uppercase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(uppercase).pipe(process.stdout);
};

transform();
