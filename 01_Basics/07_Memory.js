// Stack used for Primitive Memory

// Heap is used for Non-Primitive datatypes

let myYoutubeName = "Suraj";

let anothername = myYoutubeName;

anotherName = "chaiaurcode";

console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "suraj@google.com";

// Answer is same since it get reference of the main address
// from the heap
console.log(userOne.email);
console.log(userTwo.email);
