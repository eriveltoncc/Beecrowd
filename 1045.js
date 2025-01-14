var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var [A, B, C] = input.trim().split(' ').map(Number);

// Ordena os lados em ordem decrescente
[A, B, C] = [A, B, C].sort((a, b) => b - a);

// Verifica se os lados formam um triângulo
if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
} else {
    // Calcula os quadrados dos lados
    let A2 = A * A;
    let B2 = B * B;
    let C2 = C * C;

    // Verifica o tipo de triângulo
    if (A2 === B2 + C2) {
        console.log("TRIANGULO RETANGULO");
    } else if (A2 > B2 + C2) {
        console.log("TRIANGULO OBTUSANGULO");
    } else if (A2 < B2 + C2) {
        console.log("TRIANGULO ACUTANGULO");
    }

    // Verifica se o triângulo é equilátero ou isósceles
    if (A === B && B === C) {
        console.log("TRIANGULO EQUILATERO");
    } else if (A === B || B === C || A === C) {
        console.log("TRIANGULO ISOSCELES");
    }
}

/* Tipos de Triângulos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.

Exemplos de Entrada	Exemplos de Saída
7.0 5.0 7.0

TRIANGULO ACUTANGULO
TRIANGULO ISOSCELES */