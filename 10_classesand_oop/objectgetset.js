const User = {
    _email: "p@pt.com",
    _password: "tap",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const pratap = Object.create(User)
console.log(pratap.email);
