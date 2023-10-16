const priceHT = [100.50, 200.8, 55.7];

const TVA = .2;
const precision = 100;

function sumTTC(p1, p2, p3, p4) {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        let price = arguments[i];

        // gestion des exceptions on s'arrete si pb 
        if (isNaN(price)) throw new TypeError('is not a number');
        res += price;
    }

    return Math.floor((1 + TVA) * res * precision) / precision;
}

try {
    console.log(sumTTC(...priceHT));

    // // vérifiez le type des variables
    const badPriceHT = [20000, "hello", 55.7];
    console.log(sumTTC(...badPriceHT));
} catch (e) {
    console.log(e.message);
}