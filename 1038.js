var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var [codigo, quantidade] = input.trim().split(' ').map(Number);

// Tabela de preços
const precos = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
};

// Calcula o valor total
var valorTotal = precos[codigo] * quantidade;

// Exibe o resultado formatado
console.log(`Total: R$ ${valorTotal.toFixed(2)}`);

/* Lanche
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.



Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

Exemplo de Entrada	Exemplo de Saída
3 2

Total: R$ 10.00 */ 