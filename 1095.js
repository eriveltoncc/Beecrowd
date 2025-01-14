let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

for (let i = 1, j = 60; j > -1; i += 3, j -= 5) {
    console.log(`I=${i} J=${j}`);
}

/* Sequencia IJ 1
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo

Exemplo de Entrada	Exemplo de Saída
I=1 J=60
I=4 J=55
I=7 J=50
...
I=? J=0 */