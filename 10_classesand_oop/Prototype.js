// let myName = "pratap    "
// let mySlicer = "neurons   "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidey power is ${this.spiderman}`);   
    }
}

Object.prototype.pratap = function(){
    console.log(`pratap is present in all objects`);   
}

Array.prototype.heyPratap = function(){
    console.log(`Pratap says Hello`);
    
}

// heroPower.pratap()

// myHeros.pratap()
// myHeros.heyPratap()
// heroPower.heyPratap()


// inheritance

const User = {
    name: "john",
    email: "john@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "MrWick     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"pratap".trueLength()
"icedCoffee".trueLength()