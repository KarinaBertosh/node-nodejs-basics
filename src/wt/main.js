const performCalculations = () => {
  const { Worker } = require("worker_threads");
  const os = require("os");
  const cpuData = os.cpus().length;
  const arr = [];

  const getValue = (i) => {
    const result = 10 + i;
    return result;
  };

  const runService = (i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./src/wt/worker.js", {
        workerData: {
          value: getValue(i),
        },
      });
      worker.on("message", (result) => {
        arr.push(result);
      });
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code != 0) {
          reject(new Error("Worker has stopped"));
        }
        console.log(arr);
      });
    });
  };

  const run = async (i) => {
    const result = await runService(i);
  };

  for (let i = 0; i < cpuData; i++) {
    run(i).catch((error) => console.log(error));
  }

  // console.log(arr);

  // setTimeout(() => console.log(arr), 2000);
};

performCalculations();
