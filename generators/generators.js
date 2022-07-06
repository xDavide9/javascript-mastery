// cannot use arrow functions
// create a generator using * in declaration

const generator = function * () {
    yield 1;
    yield "Amigoscode";
    yield {name: "Alex", gender: "Male"};
};

// each call of next returns the yielded value in order
// but also done which can be true or false depending if we exited the method

// in order to achieve this behaviour store the value returned by the generator
// call in a variable so that it can keep track

const gen = generator();
/*
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
*/

// can also loop through values

let result = gen.next();

while (!result.done) {
    console.log(result.value);
    result = gen.next();
}