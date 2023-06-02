const calculateHash = async () => {
  const crypto = require("crypto");
  const fs = require("fs");
  const text = fs.readFileSync("./src/hash/files/fileToCalculateHashFor.txt");

  const hashNode = (val) =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(crypto.createHash("sha256").update(val).digest("hex")),
        0
      )
    );

  hashNode(text).then(console.log);
};

calculateHash();
