const fs = require("fs");
const process = require("process");

const read = () => {
  const file = "./src/streams/files/fileToRead.txt";

  lf = fs.createReadStream(file);
  lf.on("open", () => {
    lf.pipe(process.stdout);
  });
};

read();
