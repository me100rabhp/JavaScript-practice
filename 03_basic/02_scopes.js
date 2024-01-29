// var c  3000
let a= 3000

if(true){
    let a = 10;
    const b =13;
    var c =30
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sauarbh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)  ..website can't be accessed because that is out of function

   two();

}

// one();

// closure:-the inner function which can accesse the outer function is called clouser..

if (true) {
    const username = "sau"
    if (username === "sau") {
        const website = "youtube"
        // console.log(username + website);..can be accessed
    }
    // console.log(website);... can't be accessed
}

// console.log(username);... can't be accessed



// +++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++

// console.log(addone(5))..can be accessed before declearation

function addone(num){
    return num+1;
}
console.log(addone(5))

// console.log(addTwo(5))...can't be accessed before declearation
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5))