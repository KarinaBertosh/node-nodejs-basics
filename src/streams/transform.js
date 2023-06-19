const process = require("process");
const { Transform } = require("stream");

const transform = () => {
  const transformText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(transformText).pipe(process.stdout);
};

transform();
