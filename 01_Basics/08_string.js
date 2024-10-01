const name = "Suraj";
const repocount = 50;

// console.log(name + repocount + " Value");
// Above statement is outdated

// use this one
console.log(`Hello my name is ${name} amd repo count is ${repocount}`);

// Another way of initializing string
const gameName = new String("Suraj");

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

// Similar to substring but the only difference is that
// it can accept negative values
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   Suraj   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary/";
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));
