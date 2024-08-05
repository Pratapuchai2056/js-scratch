class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tap = new Teacher("tap", "tap@example.com", "123")

tap.logMe()

const rbmTap = new User("john")

rbmTap.logMe()

console.log(tap instanceof User);
