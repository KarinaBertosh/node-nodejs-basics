const fs = require("fs");

const list = () => {
  const files = "./src/fs/files";

  if (fs.existsSync(files)) {
    fs.readdir(files, (err, file) => {
      console.log(file);
    });
  } else {
    const err = new Error("FS operation failed");
    return console.log(err.message);
  }
};

list();
