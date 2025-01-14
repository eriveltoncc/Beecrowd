let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');
// Função que calcula Fibonacci e conta o número de chamadas recursivas
function fibonacci(n) {
    if (n === 0) return { result: 0, calls: 0 };
    if (n === 1) return { result: 1, calls: 0 };

    // Chamada recursiva para fib(n-1)
    const fib1 = fibonacci(n - 1);
    // Chamada recursiva para fib(n-2)
    const fib2 = fibonacci(n - 2);

    // Soma o resultado das chamadas e o número de chamadas
    return {
        result: fib1.result + fib2.result,
        calls: fib1.calls + fib2.calls + 2 // Conta as duas chamadas recursivas feitas
    };
}

const N = parseInt(lines[0]); // Número de casos de teste

for (let i = 1; i <= N; i++) {
    const X = parseInt(lines[i]);
    const { result, calls } = fibonacci(X);
    console.log(`fib(${X}) = ${calls} calls = ${result}`);
}

/* Fibonacci, Quantas Chamadas?
Por Neilor Tonin, URI  Brasil

Timelimit: 1
Quase todo estudante de Ciência da Computação recebe em algum momento no início de seu curso de graduação algum problema envolvendo a sequência de Fibonacci. Tal sequência tem como os dois primeiros valores 0 (zero) e 1 (um) e cada próximo valor será sempre a soma dos dois valores imediatamente anteriores. Por definição, podemos apresentar a seguinte fórmula para encontrar qualquer número da sequência de Fibonacci:
fib(0) = 0
fib(1) = 1
fib(n) = fib(n-1) + fib(n-2);

Uma das formas de encontrar o número de Fibonacci é através de chamadas recursivas. Isto é ilustrado a seguir, apresentando a árvore de derivação ao calcularmos o valor fib(4), ou seja o 5º valor desta sequência:





Desta forma,
fib(4) = 1+0+1+1+0 = 3
Foram feitas 8 calls, ou seja, 8 chamadas recursivas.
Entrada
A primeira linha da entrada contém um único inteiro N, indicando o número de casos de teste. Cada caso de teste contém um inteiro X (1 ≤ X ≤ 39) .

Saída
Para cada caso de teste de entrada deverá ser apresentada uma linha de saída, no seguinte formato: fib(n) = num_calls calls = result, aonde num_calls é o número de chamadas recursivas, tendo sempre um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
2
5
4

fib(5) = 14 calls = 5
fib(4) = 8 calls = 3 */