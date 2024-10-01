const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966;

// Same as rounding off
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));
