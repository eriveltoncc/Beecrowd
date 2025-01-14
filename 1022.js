let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

const MDC = (a, b) => {
    return (b == 0) ? a : MDC(b, a % b);
}

class Fracao{
    constructor(num, den){
        this.num = num;
        this.den = den;
    }

    irredutivel(){
        let mdc = (this.num < 0) ? MDC(-this.num, this.den) : MDC(this.num, this.den);

        return new Fracao(this.num/mdc, this.den/mdc);
    }
};

const soma = (f1, f2) => {
    return new Fracao(f1.num * f2.den + f2.num * f1.den, f1.den * f2.den);
};

const subtracao = (f1, f2) => {
    return new Fracao(f1.num * f2.den - f2.num * f1.den, f1.den * f2.den);
};

const multiplicacao = (f1, f2) => {
    return new Fracao(f1.num * f2.num, f1.den * f2.den);
};

const divisao = (f1, f2) => {
    return new Fracao(f1.num * f2.den, f2.num * f1.den);
};

let N = parseInt(lines.shift().trim());

let operador = '';
let [f1, f2, resultado] = [new Fracao(0, 1), new Fracao(0, 1), new Fracao(0, 1)];
for(let i = 0; i < N; ++i){
    [f1.num, , f1.den, operador, f2.num, , f2.den] = lines.shift().trim().split(' ');

    f1.num = parseInt(f1.num);
    f1.den = parseInt(f1.den);
    f2.num = parseInt(f2.num);
    f2.den = parseInt(f2.den);

    switch(operador){
        case '+':   resultado = soma(f1, f2);
                    break;
        case '-':   resultado = subtracao(f1, f2);
                    break;
        case '*':   resultado = multiplicacao(f1, f2);
                    break;
        case '/':   resultado = divisao(f1, f2);
                    break;
    }

    let resultadoIrredutivel = resultado.irredutivel();

    console.log(`${resultado.num}/${resultado.den} = ${resultadoIrredutivel.num}/${resultadoIrredutivel.den}`)
}

/* TDA Racional
Por Neilor Tonin, URI  Brasil

Timelimit: 1
A tarefa aqui neste problema é ler uma expressão matemática na forma de dois números Racionais (numerador / denominador) e apresentar o resultado da operação. Cada operando ou operador é separado por um espaço em branco. A sequência de cada linha que contém a expressão a ser lida é: número, caractere, número, caractere, número, caractere, número. A resposta deverá ser apresentada e posteriormente simplificada. Deverá então ser apresentado o sinal de igualdade e em seguida a resposta simplificada. No caso de não ser possível uma simplificação, deve ser apresentada a mesma resposta após o sinal de igualdade.

Considerando N1 e D1 como numerador e denominador da primeira fração, segue a orientação de como deverá ser realizada cada uma das operações:
Soma: (N1*D2 + N2*D1) / (D1*D2)
Subtração: (N1*D2 - N2*D1) / (D1*D2)
Multiplicação: (N1*N2) / (D1*D2)
Divisão: (N1/D1) / (N2/D2), ou seja (N1*D2)/(N2*D1)
Entrada
A entrada contem vários casos de teste. A primeira linha de cada caso de teste contem um inteiro N (1 ≤ N ≤ 1*104), indicando a quantidade de casos de teste que devem ser lidos logo a seguir. Cada caso de teste contém um valor racional X (1 ≤ X ≤ 1000), uma operação (-, +, * ou /) e outro valor racional Y (1 ≤ Y ≤ 1000).

Saída
A saída consiste em um valor racional, seguido de um sinal de igualdade e outro valor racional, que é a simplificação do primeiro valor. No caso do primeiro valor não poder ser simplificado, o mesmo deve ser repetido após o sinal de igualdade.

Exemplo de Entrada	Exemplo de Saída
4
1 / 2 + 3 / 4
1 / 2 - 3 / 4
2 / 3 * 6 / 6
1 / 2 / 3 / 4

10/8 = 5/4
-2/8 = -1/4
12/18 = 2/3
4/6 = 2/3 */