var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let x = +lines.shift();
let y = +lines.shift();

let km = (x/y);

console.log(`${km.toFixed(3)} km/l`);

/* Consumo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

Exemplo de Entrada	Exemplo de Saída
500
35.0

14.286 km/l */