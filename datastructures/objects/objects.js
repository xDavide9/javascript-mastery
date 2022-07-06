// an object is declared using {}
// and it can store properties in the form of key-value pairs
// any data type is allowed but the key is limited to the string type 
// and you cannot use arrow functions as values

const person = {
    name: "David",
    greet: function() {
        return `Hello I'm ${this.name}`;
    }
};

console.log(person);
console.log(person.greet());

// you can add and delete properties in two ways

person.age = 18;
person["website".toUpperCase()] = "www.david.com";

console.log(person);

delete person.age;
delete person["website".toUpperCase()];

console.log(person);

// the difference is that with [] you can perform computation on the property name

// looping through all properties using forin

for (const property in person) {
    console.log(`${property}: ${person[property]}`);
}

// which is like

console.log(`${Object.keys(person)}\n${Object.values(person)}`);