const accountId=144553
let accountEmail="pratap@google.com"
var accountPassword="12345"
accountCity="Sydney"
let accountState;

// accountId=2 //not allowed
accountEmail="hc@hc.com"
accountPassword="1212121"
accountCity="Ontario"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])