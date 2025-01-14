var lines = input.split('\n');

let valor = parseFloat(input)


console.log("NOTAS:")
let notas = parseInt(valor / 100);
console.log(notas + " nota(s) de R$ 100.00");
valor = valor % 100

notas = parseInt(valor / 50);
console.log(notas + " nota(s) de R$ 50.00");
valor = valor % 50

notas = parseInt(valor / 20);
console.log(notas + " nota(s) de R$ 20.00");
valor = valor % 20

notas = parseInt(valor / 10);
console.log(notas + " nota(s) de R$ 10.00");
valor = valor % 10

notas = parseInt(valor / 5);
console.log(notas + " nota(s) de R$ 5.00");
valor = valor % 5

notas = parseInt(valor / 2);
console.log(notas + " nota(s) de R$ 2.00");
valor = valor % 2

console.log("MOEDAS:")
notas = parseFloat(valor / 1);
console.log(Math.floor(notas) + " moeda(s) de R$ 1.00");
valor = valor % 1

notas = parseFloat(valor / 0.50);
console.log(Math.floor(notas) + " moeda(s) de R$ 0.50");
valor = valor % 0.50

notas = parseFloat(valor / 0.25);
console.log(Math.floor(notas) + " moeda(s) de R$ 0.25");
valor = valor % 0.25

notas = parseFloat(valor / 0.10);
console.log(Math.floor(notas) + " moeda(s) de R$ 0.10");
valor = valor % 0.10

notas = parseFloat(valor / 0.05);
console.log(Math.floor(notas) + " moeda(s) de R$ 0.05");
valor = valor % 0.05

notas = parseFloat(valor / 0.01);
console.log(notas.toFixed(0) + " moeda(s) de R$ 0.01") ;
valor = valor % 0.01

/* Notas e Moedas
Por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.

Exemplo de Entrada	Exemplo de Saída
576.73

NOTAS:
5 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
1 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
1 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
3 moeda(s) de R$ 0.01 */