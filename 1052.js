let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

// Converte a primeira linha da entrada para número inteiro
var monthNumber = parseInt(lines[0]);

// Função para obter o nome do mês em inglês
function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Verifica se o número do mês é válido
    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1];
    } else {
        return "Invalid month number";
    }
}

// Imprime o nome do mês correspondente
console.log(getMonthName(monthNumber));

/* Mês
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.

Exemplo de Entrada	Exemplo de Saída
4

April */