const input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
const [a, b, c] = input.trim().split(' ').map(parseFloat);

function maiorEntreDois(x, y) {
    return (x + y + Math.abs(x - y)) / 2;
}

const maiorEntreAB = maiorEntreDois(a, b);
const maiorEntreABC = maiorEntreDois(maiorEntreAB, c);

console.log(`${maiorEntreABC} eh o maior`);

/* O Maior
Adaptado por Neilor Tonin, beecrowd  Brasil

Timelimit: 1
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

Exemplos de Entrada	Exemplos de Saída
7 14 106

106 eh o maior */