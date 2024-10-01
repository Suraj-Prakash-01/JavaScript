// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// Time from myCreatedDate till now
// And it is in milli-seconds
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

// Now we can compare both of these and find the time in seconds

// To find time in seconds
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getTime());
