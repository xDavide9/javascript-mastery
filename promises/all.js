import { customers, addresses } from "./addresses-customers.js";

// using Promise.all(promises) if one promise fails everything fails
// since the return value is an array made from the promises provided
// we can destructure it to get the single promises

/*
    const fetchData = () => {
        Promise.all([customers, addresses]).then(values => {
            const [c, a] = values;  // destructuring
            console.log(c);
            console.log(a);
        }).catch(err => {
            console.log(err);
        });
    };
*/

// all can be used to optimize time if you don't have dependencies between promises
// assume customers and addresses don't depend on each other we can execute them in parallel

const fetchData = async () => {
    try {
        const values = await Promise.all([customers, addresses]);
        const [c, a] = values;
        console.log(c);
        console.log(a);
    } catch (error) {
        console.log(error);
    }
};

fetchData();