const readline = require("readline");

const transform = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.on("line", (line) => {
    const result = line.split("").reverse().join("");
    console.log(result);
  });
  rl.once("close", () => {});
};

transform();
