const parseEnv = () => {
  const prefix = "RSS_";
  for (v in process.env) {
    if (v.includes(prefix)) {
      console.log(`${v}=${process.env[v]}`);
    }
  }
};

parseEnv();
