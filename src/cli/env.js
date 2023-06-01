const parseEnv = () => {
  const prefix = "RSS_";
  let result = [];
  for (v in process.env) {
    if (v.includes(prefix)) {
      result.push(`${v}=${process.env[v]};`);
    }
  }
  console.log(...result);
};

parseEnv();
