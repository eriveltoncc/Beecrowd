let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var salario = parseFloat(input.trim());

let novoSalario, reajuste, percentual;

// Verifica em qual faixa salarial o funcionário se encontra e aplica o reajuste correspondente
if (salario >= 0 && salario <= 400.00) {
    percentual = 15;
} else if (salario >= 400.01 && salario <= 800.00) {
    percentual = 12;
} else if (salario >= 800.01 && salario <= 1200.00) {
    percentual = 10;
} else if (salario >= 1200.01 && salario <= 2000.00) {
    percentual = 7;
} else if (salario > 2000.00) {
    percentual = 4;
}

reajuste = salario * (percentual / 100);
novoSalario = salario + reajuste;

// Imprime os resultados com duas casas decimais
console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);

/* Aumento de Salário
Por Neilor Tonin, URI BR Brasil

Timelimit: 1
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


Salário	Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
400.00

Novo salario: 460.00
Reajuste ganho: 60.00
Em percentual: 15 % */