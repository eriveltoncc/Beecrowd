let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let format = (n) => {
    if (n % 10 === 0) {
        return `${Math.floor(n / 10)}`;
    } else {
        return `${Math.floor(n / 10)}.${n % 10}`;
    }
};

for (let i = 0; i <= 20; i += 2) {
    for (let j = 10; j <= 30; j += 10) {
        console.log(`I=${format(i)} J=${format(j + i)}`);
    }
}

/* Sequencia IJ 4
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
I=0 J=1
I=0 J=2
I=0 J=3
I=0.2 J=1.2
I=0.2 J=2.2
I=0.2 J=3.2
.....
I=2 J=?
I=2 J=?
I=2 J=? */