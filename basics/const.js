// const makes reassignment impossible for a variable 
// in case of and object you can still assign properties to it

const person = {};

// this works
person.name = "David";
// or
// person["name"] = "David";

// this wouldn't work because the object is a constant
person = "A String";


console.log(person);