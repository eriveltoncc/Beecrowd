let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let pesos = [2, 3, 5];
let N = parseInt(lines.shift());
for (let k = 0; k < N; ++k) {
    let notas = lines.shift().trim().split(' ').map((x) => parseFloat(x));

    let media = 0.0;
    for (let i = 0; i < 3; ++i) {
        media += notas[i] * pesos[i];
    }

    console.log(`${(media / 10).toFixed(1)}`);
}

/* Médias Ponderadas
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
3
6.5 4.3 6.2
5.1 4.2 8.1
8.0 9.0 10.0

5.7
6.3
9.3 */