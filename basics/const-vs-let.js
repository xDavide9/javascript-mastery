// A big difference from java is that everything is basically a variable
// even functions, classes and objects are variables and since it is
// a dynamically typed language they can be reassigned to different types
// creating a mess

let something = class {
    constructor(stuff) {
        this.stuff = stuff;
    }

    getStuff() {
        return stuff;
    }
};
console.log(something);

something = 1;
console.log(something);

something = "Hello";
console.log(something);

something = {
    stuff: "stuff"
};
console.log(something);

// to prevent this mess declare variable using const which prevents reassignment
// and use let only when you do need reassignment
