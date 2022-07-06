// the spread operator can be used also for arrays (not only objects)
// and it spreads the values of the array specified either to another array
// function or whatever

const evenDigits = [0, 2, 4, 6, 8];
const oddDigits = [1, 3, 5, 7, 9];

const digits = [...evenDigits, ...oddDigits];

const add = (a, b) => a + b;
console.log(add(...evenDigits));