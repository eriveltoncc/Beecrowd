let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var valor = parseFloat(input.split().shift());

function calculaImposto(e, v){
    let taxa;
    switch(e){
        case 1:
            taxa = (v - 2000) * 0.08;
            break;
        case 2:
            taxa = ((v - 3000) * 0.18) + (1000 * 0.08);
            break;
        case 3:
            taxa = ((v - 4500) * 0.28) + (1500 * 0.18) + (1000 * 0.08);
            break;    
    }

    imprimeResultado(taxa.toFixed(2));
}

function imprimeResultado(resultado){
    return console.log(`R$ ${resultado}`);
}

const isento = valor >= 0.00 && valor <= 2000.00;
const imposto_8 = valor >= 2000.01 && valor <= 3000.00;
const imposto_18 = valor >= 3000.01 && valor <= 4500.00;
const imposto_28 = valor > 4500.00; 

if (isento) console.log("Isento");
if (imposto_8) calculaImposto(1, valor);
if (imposto_18) calculaImposto(2, valor);
if (imposto_28) calculaImposto(3, valor);

/* Imposto de Renda
Por Neilor Tonin, URI  Brasil

Timelimit: 1
Em um país imaginário denominado Lisarb, todos os habitantes ficam felizes em pagar seus impostos, pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população, sem qualquer desvio. A moeda deste país é o Rombus, cujo símbolo é o R$.

Leia um valor com duas casas decimais, equivalente ao salário de uma pessoa de Lisarb. Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.



Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto de Renda, com duas casas após o ponto. Se o valor de entrada for menor ou igual a 2000, deverá ser impressa a mensagem "Isento".

Exemplos de Entrada	Exemplos de Saída
3002.00

R$ 80.36 */