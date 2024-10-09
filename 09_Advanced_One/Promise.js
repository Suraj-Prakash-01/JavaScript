const promiseOne = new Promise(function (resolve, reject) {
  // Do all async tasks
  // Databse calls, cryptography, network calls
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

/////////////////////////////////////////////////

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 resolved");
});

/////////////////////////////////////////////////

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "admin", email: "chai@chaicode.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//////////////////////////////////////////////////

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    // let error = true;

    if (!error) {
      resolve({ username: "admin", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

/////////////////////////////////////////////////

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = false;
    let error = true;

    if (!error) {
      resolve({ username: "suraj", password: "54321" });
    } else {
      reject("ERROR: Something really went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

////////////////////////////////////////////////////

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

////////////////////////////////////////////////

// Doing the same thing as above using then and catch methods

// Fetch is given the maximum priority, that's why data is printed first
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
