const user = {
    username: "saurabh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //this is use to access current constast
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sau"//context changed from saurabh to sau
// user.welcomeMessage()//this will give new value i.e. sau

// console.log(this);


// function chai(){
//     let username = "saurabh"
//     // console.log(this.username)this is use like this in only in object not in function
//     console.log(this)
// }

// chai()



// ++++++++++++ arrow function +++++++++

// const chai = function(){
//     let username = "saurabh"
//     console.log(this.username);
// }
// chai()

// const chai = ()=>{
//     let username = "saurabh"
//     console.log(this.username);
// }
// chai()


// const chai = ()=>{
//     let username = "saurabh"
//     console.log(this);
// }
// chai()



//basic syntax of arrow function is :-
//  () => {}

// const addTwo = (num1, num2) => {
    //explicte return*
//     return num1 + num2
// }
// console.log(addTwo(3,4));


//same as above 

// const addTwo = (num1, num2) => ( num1 + num2)
//implicte return*
// console.log(addTwo(3,4))


//// important ////      Basically when we use {} bracket we must have to use return  ,, but when we use ()bracket then we do not use return


const addTwo = (num1, num2) => ( {username: "saurabh"})
//we have to use {}bracket in ()bracket because of object input

const myArray = [2, 3, 4, 5]

