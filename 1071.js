let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

const numeroImpares = (X, Y) => Math.floor((Y - X) / 2.0) + 1;
const somaPA = (X, Y) => Math.floor((X + Y) * numeroImpares(X, Y)) / 2.0;

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());

if (X > Y) {
    [X, Y] = [Y, X];
}
X += (Math.abs(X) % 2) + 1;
Y -= (Math.abs(Y) % 2) + 1;

let soma = 0;
for (let i = X; i <= Y; i += 2) {
    soma += i;
}

console.log(soma);

/* Soma de Impares Consecutivos I
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

Entrada
O arquivo de entrada contém dois valores inteiros.

Saída
O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.

Exemplo de Entrada	Exemplo de Saída
6
-5

5 */