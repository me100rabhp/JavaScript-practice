class User {
    constructor(username){
        this.username = username
    }
    logME(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@djsaoa.on","p887")

chai.logME()

const masalaChai = new User("masalaChai")

masalaChai.logME()

console.log(chai === masalaChai)

console.log(chai === Teacher)

console.log(chai instanceof User)