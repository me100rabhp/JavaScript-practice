// if
//>,<,>=,<=,=(use to assign),==(compare only),===(compare as well as type check)

const idUserLoggedIn = true;
const temperature = 41;

// if(temperature<50){
//     console.log("less than 50")
// }else{
// console.log("temprature is greater than 50");
// }



// const score = 200;
// if(score> 100){
//     const power ="fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);//can't be accessed bec.. out of if block


const balance = 1000;

// if(balance>500) console.log("test").console.log("test2");

// if(balance > 500){
//     console.log("less than 500")
// }else if (balance < 750){
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2 )
{
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("usre logged in");
}