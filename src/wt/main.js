const performCalculations = () => {
  const os = require("os");
  const cpuData = os.cpus().length;
  const { Worker } = require("worker_threads");
  console.log("Start Program");

  const runService = () => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./src/wt/main.js", {});
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code != 0) {
          reject(new Error("Worker has stopped"));
        }
      });
    });
  };

  const run = async () => {
    const result = await runService();
    console.log(result);
  };

  for (let i = 0; i < cpuData; i++) {
    run().catch((error) => console.log(error));
  }

  setTimeout(() => console.log("End Program"), 2000);
};

performCalculations();
