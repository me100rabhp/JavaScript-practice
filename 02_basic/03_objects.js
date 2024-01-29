//singleton
//Object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "saurabh",
    "full name": "sfaurabh praskja",
    age: 18,
    [mySym]: "myKey1",
    //symbol ke liye square bracket use karte hai
    location: "jaipur",
    email: "saurbhp@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.email = "meF@gmail.com"

//Object.freeze(JsUser)
//it helps in freeze the objecct 


JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());