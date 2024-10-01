// Singleton( Made using constructors)
Object.create;

// Ohjects literals
const jsUser = {
  name: "Suraj",
  "Full Name": "Suraj Prakash",
  age: 20,
  location: "Mysuru",
};

// Internally key is treated as string

// This is the wrong way of retrieving data
// It won't work for case like full Name
console.log(jsUser.name);
// console.log(jsUser.Full Name);

// Use this way
console.log(jsUser["Full Name"]);
