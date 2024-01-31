//for in loop


const myObjet = {
    js: 'javaScript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObjet) {
   // console.log(`${key} shortcut is for ${myObjet[key]}`);

}


const programming = ['js', 'rb', 'py', 'java', 'cpp']
for(const key in programming){
    //console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United states Of America")
map.set('Fr', "France")
map.set('IN',"India")
// console.log(map)

for (const key in map) {
   console.log(key)
    }
