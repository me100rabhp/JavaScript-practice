const score = 400


const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// //two digits afer decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));
// //represents 3 digits only rest values in decimal form (it basically depends on the value which we take in it)


const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en'));
// //to convert the number into the us count system
// console.log(hundreds.toLocaleString('en-IN'));
// //to convert the number into the INDIAN count system


 //]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
 //++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,3,6,8,));
// console.log(Math.max(4,3,6,8,));

// console.log(Math.random());
// console.log(Math.random()*10+1);



// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()*10+1));


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)