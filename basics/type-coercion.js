// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

// type coercion is the process of changing the type of an object
// and it is performed by javascript in different situations where
// (when you use comparison operators, mathematical operators, if statements etc.)

// type coercion can be either explict or implicit
// when it's explicit it's easy to understand because
// the programmer just uses a wrapper function
// for example:

String(1);

// when it is implicit it is tricker to understand since there are many 
// situations where it looks like it doesn't make any sense

// examples:

if (0) {
    console.log("executed");
}

// it is not executed because 0 is turned into false
// but if it was 1 it would be turned to true
// and that is the same as doing explicitly:

Boolean(0);

// ------------------------------------------

"hello" + 5;

// where the 5 turns into a string due to the + operator

// ------------------------------------------

// concentrating to comparison

console.log("With implicit type coercion:");
console.log(0 == false);
console.log(0 == true);
console.log("0" == false);
console.log("0" == true);
console.log("1" == 1);
console.log("Without implicit type coercion:");
console.log(0 === false);
console.log(0 === true);
console.log("0" === false);
console.log("0" === true);
console.log("1" === 1);

// the triple equals operators (which can also be negated as !==)
// disables type coercion and therefore all those expressions are just false
// because the type is not the same