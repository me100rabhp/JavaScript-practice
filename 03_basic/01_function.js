// console.log("s");
// console.log("a");
// console.log("u");
// console.log("r");
// console.log("a");
// console.log("b");
// console.log("h");


function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("b");
    console.log("h");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//    console.log( number1 + number2)
// }

const result = addTwoNumbers(3, 4);
// console.log("result: ",result);

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;        
}
 //console.log("result: ",result);


function loginUserMessage(username){
    if(username === undefined){
            console.log("please enter the username");
    }
    return `${username} just in logged in`
}
//console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    //here ...(triple dots are known as rest operators)
    //it is also known as scatter but it depends on where we use this ...(triple dots)
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500,1000))
//first two values for val1 , val2,and rest of them are num1

const user = {
    username: "saurabh",
    price: 199
}

function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and price si ${anyobject.price}`);
}
handleObject({
    username: "sau",
    price: 200
})

const myNewArray = [200, 400,  100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));