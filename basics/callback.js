// a callback is a function passed to another function as argument
// in the style of functional programming

const greetUser = (username, customMessage) => {
    if (customMessage) {
        console.log(customMessage(username));
        return;
    }
    console.log(`Hello ${username}!`);
};

// with a callback
greetUser("David", (username) => (`What's up ${username}?`));

// without a callback
greetUser("David");



