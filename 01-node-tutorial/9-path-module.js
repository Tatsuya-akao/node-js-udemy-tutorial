const path = require("path");

console.log(path.sep);

// path.join = simply concatenate the given paths
const filePath = path.join("/content", "subs", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// path.resolve = always returns absolute path
const absolute = path.resolve(__dirname, "content", "subs", "test.txt");
console.log(absolute);
