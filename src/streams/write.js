const write = () => {
  const fs = require("fs");
  var stream = require("stream");
  var util = require("util");
  const file = "./src/streams/files/fileToWrite.txt";

  function EchoStream() {
    stream.Writable.call(this);
  }
  
  util.inherits(EchoStream, stream.Writable);
  EchoStream.prototype._write = function (chunk, encoding, done) {
    fs.createWriteStream(file).write(chunk.toString());
    done();
  };

  var myStream = new EchoStream();
  process.stdin.pipe(myStream);
};

write();
