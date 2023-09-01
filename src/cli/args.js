const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];
  const separator = ', ';
  let i = 0;

  while (i < args.length) {
    const addArgInArr = () => {
      result.push(`${args[i].replace(/^--/, "")} is ${args[i + 1]}`);
      i += 2;
    };
    args[i].startsWith("--") ? addArgInArr() : i += 1;
  }

  console.log(result.join(separator));
};

parseArgs();
