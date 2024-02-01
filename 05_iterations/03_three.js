// for of of syntax:-
// for (const iterator of object) {
    
// }


//["", "", "", ""]
//[{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}



const greetings = "hello world!"
for (const greet of greetings) {
    if(greet != " "){
        // console.log(`each char is ${greet}`);
        continue;
    }  
}
////////////// MAP ////////////////
//Maps is object which holds key-value pairs & remembers the original insertion order of the key or a value.
//maps are iteratable

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states Of America")
map.set('Fr', "France")

// console.log(map);

// for (const key of map) {
//     console.log(key)
// }


//here []  are use for de-sturcturing the array
for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1' :'NFS',
    'game2': 'spiderman'
}
// for (const [key, value]of myObject){
//     console.log(key, ':-', value);

// }  // not working
