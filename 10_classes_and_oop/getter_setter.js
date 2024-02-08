class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }

}

const saurabh = new User ("sau@ks.in", "abc")
console.log(saurabh.password)