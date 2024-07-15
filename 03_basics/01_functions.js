
function sayMyName() {
console.log("p");
console.log("r");
console.log("a");
console.log("t");
console.log("a");
console.log("p");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
    
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(6, 4);

// console.log("Result: ", result);


function loginUserMessage(username = "jim") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pratap"))
// console.log(loginUserMessage("pratap"));


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "pratap",
    prices: 399
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject ({
    username: "cas",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));