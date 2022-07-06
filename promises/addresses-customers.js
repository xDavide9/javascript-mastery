// this file holds two promises to be used for experimenting
// one returns customers and the other addresses

// they could be using async functions which are better

const customers = new Promise(resolve => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 2_000_000_000) {i++;}
        resolve([
            {name: "Jamila", id: 1},
            {name: "Bob", id: 2}
        ]);
    });
});

const addresses = new Promise(resolve => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 2_000_000_000) {i++;}
        resolve([
            {customerId: 1, address: "London"},
            {customerId: 2, address: "USA"}
        ]);
    });
});

export { customers, addresses };