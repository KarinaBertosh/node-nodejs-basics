import http from "http";
import path from "path";
import fs from "fs";
import { release, version } from "os";

const file = "./modules/esm.mjs";
const folder = "./modules";
const files = "./src/modules/files";
const random = Math.random();
let unknownObject;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${path.resolve(file)}`);
console.log(`Path to current directory is ${path.resolve(folder)}`);

if (random > 0.5) {
  unknownObject = fs.readFileSync(`${files}\\a.json`);
} else {
  unknownObject = fs.readFileSync(`${files}\\b.json`);
}

console.log(JSON.parse(unknownObject));
const PORT = 3000;

const myServer = http
  .createServer((_, res) => {
    res.end("Request accepted");
  })
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
  });

export default { unknownObject, myServer };
