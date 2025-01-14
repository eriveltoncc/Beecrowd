let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let valoresPositivos = 0;
let number = '';
let media = 0, soma = 0;

while(lines.length !== 0) {
    number = lines.shift().trim();
    if(number > 0 ) {
        valoresPositivos++;
        soma = soma + parseFloat(number);
    }
}

media = soma / valoresPositivos;

console.log(`${valoresPositivos} valores positivos
${media.toFixed(1)}`);

/* Positivos e Média
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.

Exemplo de Entrada	Exemplo de Saída
7
-5
6
-3.4
4.6
12

4 valores positivos
7.4 */