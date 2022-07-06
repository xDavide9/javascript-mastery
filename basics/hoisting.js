// hoisting happens when you use the var keyword 
// which is the old way to create variables

for (var i = 0; i < 10; i++) {}

// the value printed is actually 10 which makes no sense 
// because the scope of that variable should only be within the for loop
console.log(i);

// so you should use const or let to declare your variables