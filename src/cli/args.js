const parseArgs = () => {
  const arguments = process.argv;
  console.log(
    `${arguments[2].slice(2)} is ${arguments[3]},`,
    `${arguments[4].slice(2)} is ${arguments[5]},`,
    `${arguments[6].slice(2)} is ${arguments[7]}`
  );
};

parseArgs();
