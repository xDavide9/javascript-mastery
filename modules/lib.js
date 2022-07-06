// this file is used to demonstrate default and named exports so it is named lib.js

// you can export anything as anything can be seen as a variable (even objects, functions, classes...)

const name = "David";
const sum = (a, b) => a + b;
const substract = (a, b) => a - b;
const greet = () => console.log("Hello World!");
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// default export with no {} limited to one export per file
export default name;

// named export with {} and you can have as many as you want per file
export { sum };

// multiple named exports
export { substract, greet, multiply, divide };

