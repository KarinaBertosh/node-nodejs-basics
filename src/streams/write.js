const fs = require("fs");

const write = () => {
  const file = fs.createWriteStream("./src/streams/files/fileToWrite.txt");
  process.stdin.pipe(file);
};

write();
