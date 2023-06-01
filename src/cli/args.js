const parseArgs = () => {
  const arguments = process.argv;
  arguments.forEach((arg) => {
    if (arg) {
      console.log(arg);
    } else {
      console.log("No such arguments exists");
    }
  });
};

parseArgs();
