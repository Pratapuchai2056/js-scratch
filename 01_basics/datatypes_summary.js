// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34565435799099328728n

// (Non primitive)/Reference

// Array, Objects, Funcions

const heros = ["superman", "Ironman", "Thor"]
let myObj = {
    name: "pratap",
    age: 21,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// Stack (Primitive), Heap (Non-Primitive)

let myGitHubName = "Pratapuchai2056"

let anotherName = myGitHubName
anotherName = "jimbohaha"

console.log(myGitHubName);
console.log(anotherName);

// Stack memory gives copy of variable so as anotherName had copy of myGitHubName which later to "jimbohaha" prints changed variable and myGitHubName remains unchanged.

let userOne = {
    email: "user@google.com",
    password: "user@kpo"
}

let userTwo = userOne

userTwo.email = "pratap@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Heap memory directly gives original reference from heap memory so as email in userTwo changed also changes userOne value while it gets printed.

