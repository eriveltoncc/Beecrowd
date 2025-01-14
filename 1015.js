const input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
const lines = input.trim().split('\n');
const [x1, y1] = lines[0].split(' ').map(parseFloat);
const [x2, y2] = lines[1].split(' ').map(parseFloat);

const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));

/* Distância Entre Dois Pontos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, considerando 4 casas decimais.

Exemplo de Entrada	Exemplo de Saída
1.0 7.0
5.0 9.0

4.4721 */