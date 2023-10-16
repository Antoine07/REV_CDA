let m = "mississippi";

let s_01 = new Map();

for (const l of m) {
    if (s_01.has(l) === false) s_01.set(l, 1);
    else s_01.set(l, s_01.get(l) + 1);
}

console.log(s_01) ;

let s_02 = {}

for (const l of m) {
    if (s_02[l] === undefined ) s_02[l] = 1 ;
    else s_02[l] += 1 ;
}
console.log(s_02) ;

const counterLetter = (e, m) => m === e ? 1 : 0;

console.log( [...m].map(counterLetter) )
