let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let [maior, posicao] = [Number.MIN_VALUE, 1];

for (let i = 0; i < 100; ++i) {
    let numero = parseInt(lines.shift());

    if (numero > maior) {
        maior = numero;
        posicao = i + 1;
    }
}

console.log(maior);
console.log(posicao);

/* Maior e Posição
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

Entrada
O arquivo de entrada contém 100 números inteiros, positivos e distintos.

Saída
Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
2
113
45
34565
6
...
8
 

34565
4 */