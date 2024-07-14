// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pratap",
    "full name": "Pratap Uchai Thakuri",
    [mySym]: "mykey1",
    age: 18,
    location: "Sydney",
    email: "pratap@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "pratapuchai@mdn.com"
// Object.freeze(JsUser)
JsUser.email = "pratapuchai@max.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());