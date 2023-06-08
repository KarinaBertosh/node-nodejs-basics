const { isMainThread } = require("worker_threads");

const sendResult = () => {
  if (isMainThread) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const nthFibonacci = (n) =>
      n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
    const result = nthFibonacci(getRandomInt(10));
    console.log(result);
    return result;
  } else {
    new Worker("./src/wt/worker.js");
    console.log("Inside Worker!");
    console.log(isMainThread);
  }
};

sendResult();
