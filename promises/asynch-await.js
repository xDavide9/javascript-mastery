import { customers, addresses } from "./addresses-customers.js";

// asynch-await allows for a better syntax with promises

// this syntax gets confusing and hard to read quickly:

/*
const fetchData = () => {
    customers.then(c => {
        addresses.then(a => {
            console.log(c);
            console.log(a);
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
};
*/

// async allows us to use await to perform the same job as .then()
// and we can also perform error handling with try and catch

const fetchData = async () => {
    try {
        const c = await customers;

        // this promise will wait until the previous one is finished
        // and is the same behavior as chaining .then()
        const a = await addresses; 
        console.log(c);
        console.log(a);
    } catch (error) {
        console.log(error);
    }
};

fetchData();