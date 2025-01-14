var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var valor = parseInt(input.trim(), 10);

// Define as cédulas disponíveis em ordem decrescente
let notas = [100, 50, 20, 10, 5, 2, 1];

// Armazena o número de cédulas de cada tipo
let resultado = {};

// Inicializa o restante com o valor inicial
let resto = valor;

// Calcula o número de cédulas de cada tipo
for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    resultado[nota] = Math.floor(resto / nota); // Quantidade de notas
    resto = resto % nota; // Atualiza o resto
}

// Imprime o valor lido
console.log(valor);

// Imprime a quantidade de cada cédula
for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    console.log(`${resultado[nota]} nota(s) de R$ ${nota},00`);
}

/* Cédulas
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

Exemplo de Entrada	Exemplo de Saída
576

576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00 */