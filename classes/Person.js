// declared with const to prevent reassignment

const Person = class {
    
    // the constructor will store the parameters value
    // into the current instances of the class (with this keyword)
    // which is the reference we want to use across the class

    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    sleep() {
        console.log(this.fullname, "is sleeping");
    }

    eat() {
        console.log(this.fullname, "is eating");
    }


    // getter: the get keyword turns the method into a property
    // therefore don't use () when accessing it
    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
};

export default Person;