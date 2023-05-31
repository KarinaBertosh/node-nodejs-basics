const list = () => {
  const fs = require("fs");
  const files = "./fs/files";

  if (fs.existsSync(files)) {
    fs.readdir(files, (err, file) => {
      console.log(file);
    });
  } else {
    return console.log(`Error: FS operation failed`);
  }
};

list();
