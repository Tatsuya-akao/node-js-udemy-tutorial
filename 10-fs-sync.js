const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// if the file doesn't exist, create one
// if the file exists, overwrite it
writeFileSync(
  "./content/result-sync.txt", // path
  `Here is the result: ${first}, ${second}`, // content
  { flag: "a" } // opotions
);
