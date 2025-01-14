const input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n');

const str = lines[0].replace(/[^aeiou]/g, '');
const result = str === str.split('').reverse().join('')

console.log(result ? 'S' : 'N');