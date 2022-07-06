// just like in object you can destructure the properties of an array
// in the case of arrays use []

const friends = ["Andrea", "Marco", "Nicolo", "Matteo"];

/*
    const andrea = friends[0];
    const marco = friends[1];
    const nicolo = friends[2];
    const matteo = friends[3];
*/

const [ andrea, marco, nicolo, matteo ] = friends;

console.log(andrea, marco, nicolo, matteo);