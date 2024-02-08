let myName = "saurabh"

console.log(myName.truelength)


let myHeros = {"thor", "spiderman"}
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.saurabh = function(){
    console.log(`saurabh is present in all objects`);
}
heroPower.saurabh();