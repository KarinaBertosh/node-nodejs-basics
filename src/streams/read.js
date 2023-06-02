const read = () => {
  const fs = require("fs");
  const myReadStream = fs.createReadStream(__dirname + `/fileToRead.txt`);
  process.stdout.write(myReadStream);
};

read();
