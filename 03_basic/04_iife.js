//Immediately Invoked Function Expression  (IIFE)
//IIFE means function ko imediately execute karne ke liye use karte hai...
//global scope ke pollution ko hatane ke liye use karte hai

// function cahi(){
//     console.log(`DB CONNECTED`)
// }
// chai()

(function cahi(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();
//semicolon is important in iife
//pranthesisn act as a block and we can work in that
//()()
//1st () for function defination, 2nd for execution

//by arrow function

( (name) => {
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('saurabh')


