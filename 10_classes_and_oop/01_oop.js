//Object literals

const user ={
    username: "saurabh",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function(){
        // console.log("got user datails from database");
        // // console.log(`username:${this.username}`);
        // console.log(this);
    }
}
// console.log(user)
// console.log(user.getuserDetails());
// console.log(this);

function user(username, logincount, isloggedIn){
    this.username = username
    this.loginCount = logincount
    this.isloggedIn = isloggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new user("saurabh", 12, true)
const usertwo = new user("learn with yt", 11, false)
console.log(userOne).constructor;
console.log(usertwo)
