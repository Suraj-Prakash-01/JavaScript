const accountId = 144553;
let accountEmail = "suraj@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// We are not allowed to change const values
// accountId = 2;

console.log(accountId);

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

// Cool function of JS
console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
  Prefer not to use var because
  of issue in block scope and functional scope
*/
