let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');
//let cont = 0;
let cont2 = 0;

// for (const line in lines) {
//     //console.log(line);
//     if(line % 2 === 0) cont++;
// }

// for que funciona no beecrowd
for (let i = 0; i <= lines.length; i++) {
    if(i % 2 === 0) cont2++;
    
}

//console.log(`${cont} valores pares`);
console.log(`${cont2} valores pares`);

/* Pares entre Cinco Números
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.

Exemplo de Entrada	Exemplo de Saída
7
-5
6
-4
12

3 valo */