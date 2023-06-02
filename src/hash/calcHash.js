const calculateHash = async () => {
  const crypto = require("crypto");
  const fs = require("fs");
  const str = "I need to be hashed 😃!";

  const hashNode = (val) =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(crypto.createHash("sha256").update(val).digest("hex")),
        0
      )
    );

  hashNode(str).then(console.log);
};

calculateHash();
