const name = "pratap"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pratap-ut')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   pratap   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pratap.com/pratap%20thakuri"

console.log(url.replace('%20', '_'));

console.log(url.includes('christine'));

console.log(gameName.split('t'));

console.log(gameName.localeCompare('pratap-uts'));



