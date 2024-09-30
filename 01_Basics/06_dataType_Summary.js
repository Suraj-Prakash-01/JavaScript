// Primitive
//  They are passed by value

// 7 Types : String, Number, Boolean , Null ,
// undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.2;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("124");
const anotherId = Symbol("124");

console.log(id == anotherId); // Gives false

// n at end signifies that it's bigInt
const bigNumber = 5234534634261234n;

// Reference (Non- Primitive

// Array, objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];

// Everything inside bracket like this one is an object
let myObj = {
  name: "suraj",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World...!");
};

console.log(typeof bigNumber);
console.log(typeof myFunction);
