// let score = "33abc";
// let score = null;
let score = undefined;

console.log(typeof score);

// Data type has been changed
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// This will give NaN -> Not a Number(For 33abc and undefined case)
// Gives 0 for null
console.log(valueInNumber);

// "33" -> 33
// "abc" -> NaN
// true -> 1  && false -> 0

let isLoggedIn = 1;

let boleanIsLoggedIn = Boolean(isLoggedIn);
console.log(boleanIsLoggedIn);

// 1-> true
// 0 -> false
// "" -> false
// "Text" -> true
