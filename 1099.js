let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let numeroImpares = (X, Y) => (Y - X) / 2 + 1;
let somaPA = (a0, an) => (a0 + an) * numeroImpares(a0, an) / 2;

let N = parseInt(lines.shift());
for (let i = 0; i < N; ++i) {
    let [X, Y] = lines.shift().trim().split(' ').map((x) => parseInt(x));

    if (X > Y) {
        [X, Y] = [Y, X];
    }

    X += (Math.abs(X) % 2) + 1;
    Y -= (Math.abs(Y) % 2) + 1;

    console.log(`${X > Y ? 0 : somaPA(X, Y)}`);
}

/* Soma de Ímpares Consecutivos II
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

Saída
Imprima a soma de todos valores ímpares entre X e Y.

Exemplo de Entrada	Exemplo de Saída
7

4 5

13 10

6 4

3 3

3 5

3 4

3 8

0

11

5

0

0

0

12 */