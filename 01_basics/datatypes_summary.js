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