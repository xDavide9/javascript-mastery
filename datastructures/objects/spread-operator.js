// the spread operator is used to spread object properties (or array values)
// to other objects (or arrays)

const person = {
    name: "David",
    age: 18
};

const address = {
    country: "Italy",
    city: "Catania"
};

const personWithAddress = {
    ...person,
    address: {...address}
};

console.log(personWithAddress);