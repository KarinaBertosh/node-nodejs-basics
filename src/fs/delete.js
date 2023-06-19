const fs = require("fs");

const remove = () => {
  const file = "./src/fs/files/fileToRemove.txt";

  if (fs.existsSync(file)) {
    fs.unlink(file, () => {
      console.log("File delete");
    });
  } else {
    const err = new Error("FS operation failed");
    return console.log(err.message);
  }
};

remove();
