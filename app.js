// const amount = 9

// if (amount < 10) {
//     console.log('small number');
// } else {
//     console.log('large number');
// }

// console.log(`hey. it is my first node app`);
//Globals - NO WINDOW !!!

//__dirname  - path to current directory
//__filename - file name
//require    - function to use modules
//module     - info about current module (file)
//process    - info about env where the program is being executed

// console.log(__dirname);
// setInterval(() => {
//     console.log('hello world!');
// }, 1000);

//Modules
// const secret = 'SUPER SECRET';
// const john = 'john';
// const peter = 'peter';

// const sayHi = (name) => {
//    console.log(`Hello there ${name}`)
// }

// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative-flavor');
// //console.log(data);
// require('./7-mind-grenade')

// sayHi('Susan');
// sayHi(names.john);
// sayHi(names.peter);

//const os = require("os");

//info about current user
// const user = os.userInfo();
// console.log(user);

// // method return the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem()
// };

// console.log(currentOs);
// const path = require('path');
// console.log(path.sep);

// const filePath = path.join('/content', 'subfolder', 'test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log(first, second);
