const spawnChildProcess = (args) => {
  const { fork } = require("child_process");
  console.log("Running script.js");
  console.log("Forking a new subprocess....");
  const child = fork("./src/cp/files/script.js", args);
  child.on("close", function (code) {
    console.log("child process exited with code " + code);
  });
};

spawnChildProcess(["1", "2", "3"]);
