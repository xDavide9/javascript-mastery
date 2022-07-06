// showcases operations that can be perfomed on an array

// for each, push, splice, map, reduce

const numbers = [1, 2, 3, 4, 5];

// iterate through each number
numbers.forEach(number => console.log(number));

// pushes an element to the end of the array
numbers.push(60);

// splices an array starting at specified index (5) with specified length (1)
// because array are assigned sequential memory in the ram
numbers.splice(5, 1);

// performs an operation defined by a callback on each element of the array
const numbersSquared = numbers.map(number => number ** 2);

// reduces the elements of an array into a single value with behavior defined by a callback
// with an accumulator (that accumulate the result of each iteration) and the current number
const sum = numbers.reduce((accumulator, current) => accumulator + current);

// still reduce different operation
const strings = ["hello", "world", "how", "are", "you?"];
const string = strings.reduce((a, b) => a + " " + b);

