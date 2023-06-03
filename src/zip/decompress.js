const decompress = () => {
  const zlib = require("zlib");
  const fs = require("fs");
  const { pipeline } = require("stream");
  const unzip = zlib.createUnzip();
  const input = fs.createReadStream("archive.gz");
  const output = fs.createWriteStream("./src/zip/files/fileToCompress.txt", {
    encoding: "binary",
  });
  pipeline(input, unzip, output, (error) => {
    if (error) console.log(error);
  });
};

decompress();
