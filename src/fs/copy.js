const fs = require("fs");
const path = require("path");
const files = "./src/fs/files";
const filesCopy = "./src/fs/files-copy";

const copy = async () => {
  if (fs.existsSync(files) && !fs.existsSync(filesCopy)) {
    fs.mkdir(filesCopy, (err) => {});
    fs.readdir(files, (err, file) => {
      file.forEach((file) => {
        fs.copyFile(`./src/fs/files/${file}`, `./src/fs/files-copy/${file}`, (err) => {
          if (err) return err;
        });
      });
      console.log("Files copied");
    });
  } else {
    const err = new Error('FS operation failed')
    return console.log(err.message);
  }
};

copy();
