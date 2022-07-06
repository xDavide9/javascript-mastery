const count = (array, number) => {
    if (typeof number != "number") {
        throw new Error(`${number} is not a number`);
    }

    let occurencies = 0;

    array.forEach(e => {
        if (e == number) occurencies++;
    });

    return occurencies;
};

export default count;
