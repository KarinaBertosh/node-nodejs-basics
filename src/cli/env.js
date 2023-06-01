const parseEnv = () => {
  const prefix = "RSS_";
  const variables = process.env;
  for (v in variables) {
    if (v.includes(prefix)) {
      console.log(v);
    } else {
      console.log("No such variable exists");
    }
  }
};

parseEnv();
