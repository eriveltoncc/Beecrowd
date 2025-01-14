let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let X;

for (let i = 0; i < 10; ++i) {
    X = parseInt(lines.shift());
    console.log(`X[${i}] = ${X <= 0 ? 1 : X}`);
}