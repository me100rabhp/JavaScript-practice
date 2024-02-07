const promiseOne = new Promise(function(resolve, reject)
{
    //do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task3")
        resolve()
    },1000)
}).then(function(){
    console.log("completed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "sau", email: "sau@example.com"})
    }, 1000);
}).then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "sau", password: "1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
}).then((user) => {
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("resolved/rejected")
})


const promiseFive =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  //false
        if(!error){
            resolve({username: "sau", password: "1234"})

        }else {
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))