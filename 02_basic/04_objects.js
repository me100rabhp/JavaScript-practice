//single 

const tinderUser = new Object();


  tinderUser.id = "123abc";
tinderUser.name = "saurabh";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "sau@gmail.com",
    fullname: {
        userfullname:{
            firstname: "sau",
            lastname:  "prakash"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj4 = {
    5: "e",
    6: "f"
}
// const obj3 = { obj1,obj2 }

// const obj3 = Object.assign({},obj1, obj2,obj4)
//{}(known as empty object) is use to assure that all values of object is stores in a {}
//if we will not use {} then all object's value is stored in a first object
//.assign is use to add two or more objects in one object


const obj3 = {...obj1, ...obj2, ...obj4}
//spread is use to easy the code ...
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "sau@gmail.com"
    },
    {}
    ,{}
]
//when we get data form DATABASES we will have array and within array, Objects are stored...

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'))


