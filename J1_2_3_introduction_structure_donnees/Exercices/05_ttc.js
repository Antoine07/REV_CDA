
const precision = 100;

function ttc({ price, tva = .2 }) {
    price = parseFloat(price);
    tva = parseFloat(tva);

    if (isNaN(price) || isNaN(tva)) {
        throw new TypeError('is not a number');
    }

    return Math.floor((1 + tva) * price * precision) / precision;
}

try{
    console.log(ttc({price : 100}));
    console.log(ttc({price : "100", tva: .3}));
    console.log(ttc({price : "100", tva: ".3"}));
    console.log(ttc({price : "100", tva: "tva"}));
}catch(e){
    console.log(e.message)
}