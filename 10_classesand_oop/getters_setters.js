class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}pratap`
    }

    set password(value){
        this._password = value
    }
}

const pratap = new User("p@pratap.ai", "abc")
console.log(pratap.password);
console.log(pratap.email);

