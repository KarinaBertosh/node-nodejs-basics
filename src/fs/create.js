const fs = require("fs");
var path = require('path');
const create = () => {
  const file = path.join(__dirname, "./files/fresh.txt");
  if (!fs.existsSync(file)) {
    fs.writeFile(file, "I am fresh and young", function (err) {
      console.log("File created");
    });
  } else {
    return console.log(`Error: FS operation failed`);
  }
};

create();
