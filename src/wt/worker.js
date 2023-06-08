const { isMainThread, workerData, parentPort, Worker } = require("worker_threads");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
const result = nthFibonacci(getRandomInt(10));

const sendResult = () => {
  if (isMainThread) {
    console.log(result);
    return result;
  } else {
    console.log("Inside Worker!");
    console.log(isMainThread);
  }
};

sendResult();
