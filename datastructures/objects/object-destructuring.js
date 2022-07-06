// object destructing is the process of extracting the properties of an object
// in the case of objects use {}

const person = {
    firstName: "David",
    age: 18,
    address: {
        city: "Catania"
    }
};

/*
    const firstName = person.firstName;
    const age = person.age;
    const city = person.address.city;
*/

const { firstName, age, address: {city}} = person;

console.log(firstName, age, city);

// it is much more concise and properties can also be renamed using :
// if you add {} after : it means you are trying to access a nested property

const { firstName: personName, age: personAge, address: {city: personCity}} = person;

console.log(personName, personAge, personCity);