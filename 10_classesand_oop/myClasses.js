// // ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const tap = new User("tap", "tap@example.com", "123")

// console.log(tap.encryptPassword());
// console.log(tap.changeUsername());

// behind the scene

function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
}
    User.prototype.encryptPassword = function(){
    return `${this.password}abc`
    }   

    User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
    } 

const tap = new User("tap", "tap@example.com", "123")

console.log(tap.encryptPassword());
console.log(tap.changeUsername());