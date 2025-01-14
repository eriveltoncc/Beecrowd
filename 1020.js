var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var dias = parseInt(input.trim(), 10);


// Define o número de dias em um ano e em um mês
const diasPorAno = 365;
const diasPorMes = 30;

// Calcula o número de anos
let anos = Math.floor(dias / diasPorAno);
let restanteDias = dias % diasPorAno;

// Calcula o número de meses
let meses = Math.floor(restanteDias / diasPorMes);
restanteDias = restanteDias % diasPorMes;

// Imprime o resultado no formato desejado
console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${restanteDias} dia(s)`);

/* Idade em Dias
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.

Exemplo de Entrada	Exemplo de Saída
400

1 ano(s)
1 mes(es)
5 dia(s) */