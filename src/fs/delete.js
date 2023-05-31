const remove = () => {
  const fs = require("fs");
  const file = "./fs/files/fileToRemove.txt";

  if (fs.existsSync(file)) {
    fs.unlink(file, () => {
      console.log("File delete");
    });
  } else {
    return console.log(`Error: FS operation failed`);
  }
};

remove();
