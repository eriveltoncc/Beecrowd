let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

class Pilha {
    constructor() {
        this.pilha = [];
    }

    push(valor) {
        this.pilha.push(valor);
    }

    pop() {
        this.pilha.pop();
    }

    top() {
        return this.pilha[this.pilha.length - 1];
    }

    size() {
        return this.pilha.length;
    }

    empty() {
        return this.pilha.length === 0;
    }
}

const precedencia = (operador) => {
    return (operador === '+' || operador === '-') ? 1 : 2;
};

let N = parseInt(lines.shift());

for(let k = 0; k < N; ++k){
    let expressao = lines.shift();

    let resposta = '';
    const pilha = new Pilha();
    for(let i = 0; i < expressao.length; ++i){
        if(/[A-Za-z0-9]/.test(expressao[i])){
            resposta += expressao[i];
        }else if(expressao[i] === '(' || expressao[i] === '^'){
            pilha.push(expressao[i]);
        }else if(expressao[i] === ')'){
            while(!pilha.empty() && pilha.top() !== '('){
                resposta += pilha.top();
                pilha.pop();
            }
            if(!pilha.empty())    pilha.pop();
        }else{
            while(!pilha.empty() && pilha.top() !== '(' && precedencia(expressao[i]) <= precedencia(pilha.top())){
                resposta += pilha.top();
                pilha.pop();
            }
            pilha.push(expressao[i]);
        }
    }

    while(!pilha.empty()){
        resposta += pilha.top();
        pilha.pop();
    }

    console.log(resposta);
}

/* Infixa para Posfixa
Por Neilor Tonin, URI  Brasil

Timelimit: 1
O Professor solicitou que você escreva um programa que converta uma expressão na forma infixa (como usualmente conhecemos) para uma expressão na forma posfixa. Como você sabe, os termos in (no meio) e pos (depois) se referem à posição dos operadores. O programa terá que lidar somente com operadores binários +,-,*,/,^, parênteses, letras e números. Um exemplo seria uma expressão como:
(A*B+2*C^3)/2*A. O programa deve converter esta expressão (infixa) para a expressão posfixa: AB*2C3^*+2/A*
 

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 1000), que indica o número de casos de teste. Cada caso de teste a seguir é uma expressão válida na forma infixa, com até 300 caracteres.

Saída
Para cada caso, apresente a expressão convertida para a forma posfixa.

Exemplo de Entrada	Exemplo de Saída
3
A*2
(A*2+c-d)/2
(2*4/a^b)/(2*c)

A2*
A2*c+d-2/
24*ab^/2c*/