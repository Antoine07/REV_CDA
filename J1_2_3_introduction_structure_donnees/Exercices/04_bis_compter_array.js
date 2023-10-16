const phrases = [
    ["aaabbfffhjik", "hhhkkkiooo", "hhjuuk"],
    ["rrrtttyyuuii", "rroooiiiuuu", "jjjhhhaa"],
    ["aaabbgghhh", "iiikkkooomml", "hhhiijjjuu"],
    ["hhhyyytttuu", "xxxnnnooii", "kkkjjjuuppp"],
    ["qqqfffgghhh", "qqqkkklll", "ooohhhjjj"],
]

// 1 Rettier mes doublons

phrases.map(line => {
    for (let i = 0; i < line.length; i++) {
        line[i] = [...(new Set(line[i]))].join("")
    }
})

console.log(phrases);

// explictions les références de tableau

let a = [1, 2];
b = a;
b[0] = 100;
// nouvel référence
f = a.map(e => e);
f[1] = 100;

console.log(a);
console.log(b);
console.log(f);

// map fait un shallow copy
const p = [[1, 2], [2, 3]];
const q = p.map(e => { e[0] = "bonjour"; return e });
console.log(p);
console.log(q);


// 2

let res = [];
for (const line of phrases) {
    for (const e of line) res.push(e)
}

res.sort((a, b) => a.length - b.length)

console.log(res)

let [c, i, j] = [0, 0, 0];
while (c < 15) {
    phrases[i][j] = res[c];
    c = c + 1;
    i = i + 1;
    if (i == 3) {
        j = j + 1;
        i = 0;
    }
}

console.log(phrases)