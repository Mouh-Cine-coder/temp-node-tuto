const os = require('os')


// info about current user


const user = os.userInfo();

console.log(user);

// method return the system uptime in seconds

console.log(`the system uptime in seconds is ${os.uptime()} and in hours is ${os.uptime() / 3600}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);

