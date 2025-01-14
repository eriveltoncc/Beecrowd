var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var valores = input.trim().split(' ').map(Number);

// Guarda os valores originais para imprimir depois
var valoresOriginais = [...valores];

// Ordena os valores em ordem crescente
valores.sort((a, b) => a - b);

// Imprime os valores ordenados
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);

// Imprime uma linha em branco
console.log();

// Imprime os valores na ordem original
console.log(valoresOriginais[0]);
console.log(valoresOriginais[1]);
console.log(valoresOriginais[2]);

/* Sort Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.

Exemplo de Entrada	Exemplo de Saída
7 21 -14

-14
7
21

7
21
-14
 */