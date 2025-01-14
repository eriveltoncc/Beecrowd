var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');


let totalSegundos = parseInt(lines.shift());

let qtdHoras = totalSegundos / 3600;
totalSegundos = totalSegundos % 3600;
		
let qtdMinutos = totalSegundos / 60;
totalSegundos = totalSegundos % 60;
		
let qtdSegundos = totalSegundos;

console.log(Math.floor(qtdHoras)+ ":" + Math.floor(qtdMinutos) + ":" + Math.floor(qtdSegundos));

/* Conversão de Tempo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

Exemplo de Entrada	Exemplo de Saída
556

0:9:16 */