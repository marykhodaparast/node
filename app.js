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

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
//console.log(data);
require('./7-mind-grenade')

// sayHi('Susan');
// sayHi(names.john);
// sayHi(names.peter);