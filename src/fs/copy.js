const copy = async () => {
  const fs = require("fs");
  const files = "./fs/files";
  const filesCopy = "./fs/files-copy";

  if (fs.existsSync(files) && !fs.existsSync(filesCopy)) {
    fs.mkdir(filesCopy, (err) => {});
    fs.readdir(files, (err, file) => {
      file.forEach((file) => {
        fs.copyFile(`./fs/files/${file}`, `./fs/files-copy/${file}`, (err) => {
          if (err) return err;
        });
      });
      console.log("Files copied");
    });
  } else {
    return console.log(`Error: FS operation failed`);
  }
};

copy();
