const rename = () => {
  const fs = require("fs");
  const file = "./fs/files/wrongFilename.txt";
  const newFile = "./fs/files/properFilename.md";

  if (fs.existsSync(file) && !fs.existsSync(newFile)) {
    fs.rename(file, newFile, () => {
      console.log("File Renamed!");
    });
  } else {
    return console.log(`Error: FS operation failed`);
  }
};

rename();
