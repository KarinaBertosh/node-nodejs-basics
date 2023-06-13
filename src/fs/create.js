const fs = require("fs");
const path = require('path');

const create = () => {
  const file = path.join(__dirname, "./files/fresh.txt");
  if (!fs.existsSync(file)) {
    fs.writeFile(file, "I am fresh and young", function (err) {
      console.log("File created");
    });
  } else {
    const err = new Error('FS operation failed')
    return console.log(err.message);
  }
};

create();
