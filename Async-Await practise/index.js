const fs = require('fs').promises;

async function file() {
    
    //async/await code
    //throw new Error("dnop")
    const data = await fs.readFile("other.json", "utf-8");
    return data;

    //promises
    // return new Promise((resolve, reject) => {
    //     const data = fs.readFile("other.json", "utf-8");
    //     resolve(data)
    // })
}

//The below code will work in both the cases, be it a function returning a promise or using async/await.
//The code is only ideal for a function that returns a promise
// file()
// .then(data => {
//     console.log(data)
//     console.log("\nsoham");
// })
// .catch(e => console.log(e))

//The below code will work only for async/await. If we use await for the file function,
//it returns a promise which needs another await to get resolved to otherwise we can use .then
//which gets passed as its argument the data that we are supposed to get

// const f = async () => {
//     try{
//         console.log(await fs.readFile("other.json", "utf-8"));
//         console.log("\nsoham");
//         //calls above function file() which will return a promise, and not the data
//         //to use data we must wrap the current code into an async function
//         //remember: if you keep returning the data that you received from a function that returns promise
//         //you are essentially returning the promise object and not the data as you expected
//         //return file()  
//         // console.log(file());
//         // console.log("\nsoham");
//     }
//     catch(e) {
//             console.log(e.name + ': ' + e.message)
//     }
// }
// f();


//Remember every time we return the data that we received from an awaited function,
//that data would be a promise and not the actual data that we were expecting. 
//And to print the data of that returned promise we can either do .then and .catch
//or await the promise again (awaiting for promise is redundant as mentioned above in function f())


//So to use async/await code for a function that returns a promise + data and you dont want to pass that data to other functions 
//1. Make a funciton that is async,
//2. Put a try catch block
//3. call the function with await that returns a promise 
//4. do something with the data that was received by the function in 3. (if you return that data, it will be converted to a promise)

//if you need not to return data from async/await code use below syntax
/*const f = async () => {
    try{
        console.log(await fs.readFile("other.json", "utf-8"))
        console.log("\nsoham");
    }
    catch(e) {
        console.log(e.name + ': ' + e.message)
    }
}*/

//f()





//if you need to return some data from async/await code use below syntax

/*async function fetchAsync () {
  // await response of fetch call
  let response = await fetch('https://api.github.com');
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

// trigger async function
// log response or catch error of fetch promise (remember data is promise so you need to thenify it)
fetchAsync()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))*/




async function f() {

    const data = await fs.readFile("other.json", "utf-8");
    return JSON.parse(data);

    //promises
    // return new Promise((resolve, reject) => {
    //     const data = fs.readFile("other.json", "utf-8");
    //     resolve(data)
    // })
}

f().
then(data => console.log(data))