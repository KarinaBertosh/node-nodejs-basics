const { fork } = require("child_process");

const spawnChildProcess = (args) => {
  console.log("Running script.js");
  console.log("Forking a new subprocess....");

  const child = fork("./src/cp/files/script.js", args);

  child.on("message", (msg) => {
    console.log(msg);
  });

  child.on("close", function (code) {
    console.log("child process exited with code " + code);
  });
};

spawnChildProcess(["1", "2", "3"]);
