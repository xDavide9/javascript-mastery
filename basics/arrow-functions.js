// arrow functions are a better syntax to write functions
// in the style of functional programming

// 1) function by itself
//    just bad

function sayHi() {
    console.log("Hi World!");
}

sayHi();

// 2) function stored in const variable to prevent reassignment
//    still bad

const sayHello = function() {
    console.log("Hello World!");
};

sayHello();

// 3) arrow function no parameters no return
//    now the good stuff

const sayWow = () => console.log("WoW");

// 4) arrow function with parameters and return
//    encapsulate in round brackets if returning an object

const getGreetings = (name, age) => `Hello, I'm ${name} and I'm ${age} years old.`;

console.log(getGreetings("David", 18));

// 5) arrow function with a single parameter and curly braces
//    can omit parenthesis for a single parameter and use {} for longer functions

const shout = word => {
    if (typeof word != "string") return;
    console.log(word.toUpperCase());
};

shout("shouted");

// some practice

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const calculate = (a, b, sign) => {
    switch (sign) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return "error";          
    }
};

console.log(calculate(1, 4, "-"));

// functions can also have default parameters 

const greet = (name = "David") => (`Hello I'm ${name}`);

console.log(`Without specifying a parameter: ${greet()}`);
console.log(`Specifying a parameter: ${greet("Mr. X")}`);


