const name = "saurabh"

const repoCount = 50;

// console.log(name+repoCount+"value")


console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('saurabh-prakash')

console.log(gameName[0]);
console.log(gameName.__proto__)


// console.log(gameName.toUpperCase())

// console.log(gameName.length)


// console.log(gameName.charAt('3'))


// console.log(gameName.indexOf('h'))



const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(0,4)
console.log(anotherString)


const newStringOne = "  saurabh  "
console.log(newStringOne.trim());

const url = "https://saurabh.com/saurabh%20prakash"

console.log(url.replace('%20','-'))

console.log(url.includes('saurabh'));
console.log(url.includes('vijay'));

console.log(gameName.split('-'));