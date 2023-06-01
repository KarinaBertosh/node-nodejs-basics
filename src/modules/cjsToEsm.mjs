import http from "http";
import path from "path";
import { release, version } from "os";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const file = "./modules/cjsToEsm.mjs;";
const folder = "./modules;";
const random = Math.random();
let unknownObject;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${path.resolve(file)}`);
console.log(`Path to current directory is ${path.resolve(folder)}`);

if (random > 0.5) {
  unknownObject = await import("./files/a.json", { assert: { type: "json" } });
} else {
  unknownObject = await import("./files/b.json", { assert: { type: "json" } });
}

console.log(unknownObject.default);
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
