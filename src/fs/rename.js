const rename = () => {
  const fs = require("fs");
  const file = "./src/fs/files/wrongFilename.txt";
  const newFile = "./src/fs/files/properFilename.md";

  if (fs.existsSync(file) && !fs.existsSync(newFile)) {
    fs.rename(file, newFile, () => {
      console.log("File Renamed!");
    });
  } else {
    const err = new Error('FS operation failed')
    return console.log(err.message);
  }
};

rename();
