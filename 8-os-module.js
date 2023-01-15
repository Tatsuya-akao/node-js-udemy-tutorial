const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

console.log(`Thrse system uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  relesase: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
