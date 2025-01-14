const input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n');

const [ax, bc] = lines.shift().split(" ");

console.log(`${(ax / bc).toFixed(2)}`);