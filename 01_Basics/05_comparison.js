// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);

//null == 0 checks for loose equality but doesn't coerce null to a number
console.log(null == 0);
console.log(null === 0);

//  null >= 0 forces a type conversion of null to 0 and then performs a numeric comparison, which results in true
console.log(null >= 0);

// === ->strict check
//  It checks data type as well
