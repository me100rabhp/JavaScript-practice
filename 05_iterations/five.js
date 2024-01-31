//for-each loop...


const coding = ["js", "ruby", "java", "python", "cpp"]
//function name is not present in it 
// coding.forEach((co) => {   //arrow function
//     //console.log(co);
// });

//function name is not present in it 
// coding.forEach(function(co) {
//     console.log(co);
// });



// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// });

const myCoding =[ {
    languageName: "javascript",
    languageFileName: "js"
},
 {
    languageName: "java",
    languageFileName: "java"
},
 {
    languageName: "python",
    languageFileName: "py"
}]

myCoding.forEach((item)=>{
    console.log(item.languageName,item.languageFileName);
})