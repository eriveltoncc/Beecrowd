let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');
var lines = input.split(' ');

const I = parseFloat(lines.shift());
const F = parseFloat(lines.shift());

let resultado = I;

let cont = 0;

while(true){
    if(I === F){
        cont = 24;
        break;
    } else if (I < F){
        cont++;
        resultado++;
        if(resultado === F){
            break;
        }
    } else if (I > F) {
        cont++;
        resultado++;
        if(resultado === 24){
            cont += F;
            break;
        }
    }
}

console.log(`O JOGO DUROU ${cont} HORA(S)`);

/* Tempo de Jogo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
16 2

O JOGO DUROU 10 HORA(S) */