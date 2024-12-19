import os from 'os';

// all info about system - helpful for when you're interacting with system and it's memory and stuff and then make visiualizations

console.log(os.arch()); // x64
console.log(os.type()); // windows nt
console.log(os.uptime());
console.log(os.hostname());

console.log(os.platform());
console.log(os.userInfo().username);
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.cpus());

console.log(os.machine())
console.log(os.release())
console.log(os.version())