let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split(' ');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

const regra1 = Math.abs(B - C) < A;
const regra2 = Math.abs(A - C) < B;
const regra3 = Math.abs(A - B) < C;

let resultado = 0;

if(regra1 && regra2 && regra3){
    resultado = A + B + C;
    console.log(`Perimetro = ${resultado.toFixed(1)}`);
} else {
    resultado = ((A + B ) * C) / 2;
    console.log(`Area = ${resultado.toFixed(1)}`);
}

/* Triângulo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.

Exemplo de Entrada	Exemplo de Saída
6.0 4.0 2.0

Area = 10.0 */