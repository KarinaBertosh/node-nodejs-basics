const performCalculations = () => {
  const os = require("os");
  const cpuData = os.cpus().length;
  const { Worker } = require("worker_threads");

  const runService = () => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./src/wt/worker.js", {
        workerData: {
          value: 14,
        },
      });
      worker.on("message", (result) => {
        console.log(result);
      });
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
  };

  for (let i = 0; i < cpuData; i++) {
    run().catch((error) => console.log(error));
  }
};

performCalculations();
