let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let [impares, positivos, negativos] = [0, 0, 0];

for (let i = 0; i < 5; ++i) {
    let numero = parseInt(lines.shift());

    if (Math.abs(numero) % 2)
        ++impares;
    if (numero > 0)
        ++positivos;
    if (numero < 0)
        ++negativos;
}

console.log(`${5 - impares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);

/* Pares, Ímpares, Positivos e Negativos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.

Exemplo de Entrada	Exemplo de Saída
-5
0
-3
-4
12

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s) */