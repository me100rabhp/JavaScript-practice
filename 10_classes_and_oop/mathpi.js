// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)



// // console.log(Math.PI)
// const p = Math.PI = 5
// console.log(p)



const c = Object.create(null)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name")
// );

Object.defineProperties(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name")
);


for (let)