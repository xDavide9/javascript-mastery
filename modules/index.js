// https://stackoverflow.com/questions/33611812/export-const-vs-export-default-in-es6#:~:text=When%20you%20put%20default%2C%20its,with%20curly%20braces%20inside%20it.

// index.js is generally used as name for the entry point of your application

// for imports and exports to work the package.json file must exist within 
// (which you can create by running npm init -y) the directory 
// because it is what node uses to organize them

// by default the "type" property is set to "commonjs" but we don't want that
// so we set it to "modules" so that modules work the way ES intended it

// the package.json has a lot of other properties like "name", "main", "version", "description"
// but they are beyond the scope of this topic for now

// comes from a default export (no {}) and the name can be anything
import name from "./lib.js";

// comes from a named export (with {}) and the name must match the one in lib.js
import { sum } from "./lib.js";

// you can import multiple named exports at once too
import { substract, greet } from "./lib.js";

// you can also import every named export with a wildcard
// where using an alias (as is mandatory because it is like the access point and thefore in capital)
import * as Lib from "./lib.js";

console.log(name);
console.log(sum(1, 2));
console.log(substract(2, 5));
greet();
console.log(Lib.multiply(4, 2));
console.log(Lib.divide(7, 2));