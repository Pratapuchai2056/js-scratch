class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);   
    }

    static createId(){
        return `123`
    }
}

const tap = new User("tap")

// console.log(tap.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@example.com")
// console.log(iphone.createId());