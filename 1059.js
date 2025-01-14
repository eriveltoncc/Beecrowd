let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

for (let i = 1; i <= 100; i++) {
    if(i % 2 !== 1) {console.log(i);}    
}

/* Números Pares
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que mostre os números pares entre 1 e 100, inclusive.

Entrada
Neste problema extremamente simples de repetição não há entrada.

Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.

Exemplo de Entrada	Exemplo de Saída
2
4
6
...
100 */