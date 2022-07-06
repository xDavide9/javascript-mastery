// eslint-disable-next-line quotes
const json = '{"brand": "Amigoscode"}';

try {
    console.log(JSON.parse(json));
} catch (error) {
    console.log(error);

    // the error has a name, message and stack
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("finally was invoked");
}
