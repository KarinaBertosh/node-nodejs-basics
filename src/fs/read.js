const read = () => {
  const fs = require("fs");
  const file = "./fs/files/fileToRead.txt";
  if (fs.existsSync(file)) {
    const file = fs.createReadStream("./fs/files/fileToRead.txt", "utf-8");
    file.on("data", (chunk) => console.log(chunk));
  } else {
    return console.log(`Error: FS operation failed`);
  }
};

read();
