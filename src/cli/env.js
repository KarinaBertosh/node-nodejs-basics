const parseEnv = () => {
  const prefix = "RSS_";
  const variables = process.env;
  console.log(1, process.env.RSS_bar);

  for (v in variables) {
    if (v.includes(prefix)) {
      console.log(v);
    }
  }
};

parseEnv();
