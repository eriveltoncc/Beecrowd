let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n');

let A = +lines.shift();
let B = +lines.shift();
let C = +lines.shift();


const comissao = C * 0.15;

const total = B + comissao;

console.log("TOTAL = R$ " + total.toFixed(2));

/* Salário com Bônus
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

Exemplos de Entrada	Exemplos de Saída
JOAO
500.00
1230.30

TOTAL = R$ 684.54 */