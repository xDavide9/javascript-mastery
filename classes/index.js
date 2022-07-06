import Person from "./Person.js";
import Dev from "./Dev.js";

const david = new Person("David", "White", "Male", 18);

// properties
console.log(david.firstName);
console.log(david.lastName);
console.log(david.gender);
console.log(david.age);
console.log(david.fullname);

// behaviours
david.eat();
david.sleep();

console.log();

const nicole = new Dev("Nicole", "Jones", "Female", 22, ["JS", "Java"]);

// properties
console.log(nicole.firstName);
console.log(nicole.lastName);
console.log(nicole.gender);
console.log(nicole.age);
console.log(nicole.fullname);

// behaviours
nicole.eat();
nicole.sleep();
nicole.code();