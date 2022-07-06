// sets do not allow duplicates

const numbers = [1, 1, 2, 2, 3];
console.log(numbers);

const set = new Set();
set.add(1).add(1).add(2).add(2).add(3);
console.log(set);

// operations are very similar to the ones of a map

if (set.has(3)) {
    set.delete(3);
}

console.log("Set Size:", set.size);

// iterate through set

for (const number of set) {
    console.log("for", number);
}

set.forEach(number => console.log("forEach", number));

// remove duplicates from array using sets

const array = [4, 5, 5, 6, 6, 7];
console.log(array);
console.log(Array.from(new Set(array)));