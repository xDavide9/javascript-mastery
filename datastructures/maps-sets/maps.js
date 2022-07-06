const map = new Map();

// you can concatenate
map.set("name", "David")
    .set("age", 18)
    .set("delete", true);

// deletes a key
map.delete("delete");

console.log(map);

// size is a property
console.log("Map Size:", map.size);

// checkes if it has a key and prints it
if (map.has("age")) {
    console.log("Age:", map.get("age"));
}

// creates an object from the map entries
console.log(Object.fromEntries(map.entries()));

// clears every pair in the map
map.clear();

// iterating through a map
map.set("name", "David")
    .set("age", 18);

// https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements\
// for in iterates through indexes (in arrays) and keys (in objects)
// for of iterates through values of any iterable (like map.keys())

for (const key of map.keys()) {
    console.log(key, ":", map.get(key));
}







