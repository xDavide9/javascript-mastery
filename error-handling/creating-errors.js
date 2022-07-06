class ArithmeticOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ArithmeticOperationError";
    }
}

const divide = (a, b) => {
    if (b == 0) throw new ArithmeticOperationError("Cannot divide by 0");
    return a / b;
};

try {
    divide(10, 0);
} catch (error) {
    console.log(error);
}


