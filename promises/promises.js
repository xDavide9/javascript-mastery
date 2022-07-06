// promises are used to procude a result that will be achieved in the future and therefore 
// we are simulating asynchronous code with setTimeout to execute after some time
// there are three states for a promise: resolve, when success; reject, when fail; pending, in none of the above
// once we define the promise we can call .then() and pass a callback to specify
// what to do in case of succ and then call .catch() to specify what to do in case of error

console.log("synchronous 1");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data back from the server");
    }, 3000);

    setTimeout(() => {
        reject("data back from the server");
    }, 5000);
});

promise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

console.log("synchronous 2");

// synchronous 1 and 2 are both printed immediately meaning promises
// do not block the flow of execution and allow for synchronous code

// be careful: if promises are not used the right way you might create asynchronous code

const asynchPromise = new Promise(resolve => {
    let i = 0;
    while (i < 10_000_000_000) {i++;}
    resolve("resolved");
});

asynchPromise.then(res => console.log(res));

console.log("synchronous 3");

// synchronous 3 is not executed immediately because the flow of execution is blocked by a bad promise

const synchPromise = new Promise(resolve => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 10_000_000_000) {i++;}
        resolve("resolved");
    });
});

console.log("synchronous 4");

// synchronous 4 is executed immediately with a proper promise (already resolved)
// but the syntax can be improved...
