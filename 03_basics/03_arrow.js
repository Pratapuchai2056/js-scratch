const user = {
    username: "pratap",
    price: 19.99,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "edie"
// user.welcomeMessage()

// console.log(this);

// function cookedLemon() {
//     let username = "pratap"
//     console.log(this.username);
// }

// cookedLemon()


// const cookedLemon = function () {
//     let username = "pratap"
//     console.log(this.username);
// }

const cookedLemon =  () => {
    let username = "pratap"
    console.log(this);
}

// cookedLemon()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// implicit return, meaning in one line of code doesnot necessarily have to write "return" if not with { }.

// const addTwo = (num1, num2) =>  ( num1 + num2 )

// Or, easy to understand use of () meaning return not needed vs {} return needed.

const addTwo = (num1, num2) =>  ({username: "pratap"})

console.log(addTwo(3, 5));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()