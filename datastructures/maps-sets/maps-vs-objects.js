// both objects and maps are datastructures that hold key-value pairs
// a map allows to have the key in any data type whereas the objects only in the form of string

const map = new Map();

// the key can be whatever type you want
map.set(1, "number 1");
map.set({hello: "world"}, "an object");
map.set(1, "number one");   // this will override the previous entry because a key must be unique

console.log(map);

