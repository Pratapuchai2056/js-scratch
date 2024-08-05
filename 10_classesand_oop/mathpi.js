const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);

// Math.PI = 5

// console.log(Math.PI);


const tap = {
    name: "john",
    kills: 477,
    isAvailable: false,

    orderHandG: function(){
        console.log("No glocks available");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(tap,"kills"));

Object.defineProperty(tap, "kills", {
   // writable: false,
    enumerable: true,
})

// console.log(Object.getOwnPropertyDescriptor(tap,"kills"));

for (let [key, value] of Object.entries(tap)) {
    if (typeof value !== 'function' ){
    
        console.log(`${key}: ${value}`);
    }
}

