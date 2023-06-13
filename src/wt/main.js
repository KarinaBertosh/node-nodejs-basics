const performCalculations = () => {
  const { Worker, MessageChannel } = require("worker_threads");
  const assert = require("assert");
  const os = require("os");
  const cpuData = os.cpus().length;

  let arr = [];

  const getValue = (i) => {
    const result = 10 + i;
    return result;
  };

  const runService = (i) => {
    const worker = new Worker("./src/wt/worker.js", {
      workerData: {
        value: getValue(i),
      },
    });
    const subChannel = new MessageChannel();
    worker.postMessage({ hereIsYourPort: subChannel.port1 }, [
      subChannel.port1,
    ]);
    subChannel.port2.on("message", (value) => {
      arr.push({ status: "resolved", data: value });
    });
    worker.on("error", (result) => {
      arr.push({ status: "error", data: null });
    });
    worker.on("exit", (code) => {
      if (code != 0) {
        new Error("Worker has stopped");
      }
      console.log(arr);
    });
  };

  const run = async (i) => {
    const result = await runService(i);
  };

  for (let i = 0; i < cpuData; i++) {
    run(i).catch((error) => console.log(error));
  }
};

performCalculations();
