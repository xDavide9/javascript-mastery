import Person from "./Person.js";

const Dev = class extends Person {
    constructor(firstName, lastName, gender, age, languages) {
        super(firstName, lastName, gender, age);
        this.languages = languages;
    }

    code() {
        console.log(`${this.fullname} is coding in ${this.languages}`);
    }
};

export default Dev;