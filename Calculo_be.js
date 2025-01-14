let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n');

const pegarValores = (line) => line.split(' ').map(a => +a);

const [a,b,c] = pegarValores(lines.shift());
const [a1,b1,c1] = pegarValores(lines.shift());

let total = (b*c) + (b1*c1)
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)