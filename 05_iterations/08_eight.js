// const myNums = [1, 2, 3, 4, 5]

// const mytotal = myNums.reduce( (acc,currval) => { //acc = accumalator, currval = currentvalue
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0) //0 means where to start the accumalator

// console.log(mytotal)


// const myTotal = myNums.reduce(function (acc, currval){
//      console.log(`acc: ${acc} and currval: ${currval}`)
//      return acc + currval;
// } , 0)

// console.log(myTotal)

const shoppingCart = [{
    itemName: "js course",
    price: 2999
},
{
    itemName: "py course",
    price: 999
},
{
    itemName: "mobile course",
    price: 5999
},
{
    itemName: "data science course",
    price: 12999
}]

const totalPrice = shoppingCart.reduce((acc,cv)=>{return  acc + cv.price },0)

console.log(totalPrice)