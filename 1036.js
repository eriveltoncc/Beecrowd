let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

var [A, B, C] = lines[0].split(' ').map(Number);

var delta = (B * B) - (4 * A * C);

if (A === 0 || delta < 0) {
    console.log("Impossivel calcular");
} else {
    var R1 = (-B + Math.sqrt(delta)) / (2 * A);
    var R2 = (-B - Math.sqrt(delta)) / (2 * A);
    
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}

/* Fórmula de Bhaskara
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

Exemplos de Entrada	Exemplos de Saída
10.0 20.1 5.1

R1 = -0.29788
R2 = -1.71212 */ 