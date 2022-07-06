// enhanced properties allow you to remove redundancies when creating object using arrow functions

const normalCalculator = (brand, price) => ({
    brand: brand,
    price: price,
    getDiscount: function() {
        return this.price - (this.price * .3);
    }
});

// turns into

const enhancedCalculator = (brand, price) => ({
    brand,
    price,
    getDiscount() {
        return this.price - (this.price * .3);
    }
});

const casio = enhancedCalculator("casio", 10);
console.log(casio);
console.log(casio.getDiscount());
