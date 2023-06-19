const { createReadStream, createWriteStream } = require("fs");
const { createGzip } = require("zlib");

const compress = () => {
  const compressFile = (path) => {
    const handleStream = createReadStream(path);
    handleStream
      .pipe(createGzip())
      .pipe(createWriteStream("archive.gz"))
      .on("finish", () => {
        console.log("Compression completed successfully");
      });
  };
  compressFile("./src/zip/files/fileToCompress.txt");
};

compress();
