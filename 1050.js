let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = parseInt((input.split('\n')).shift());

switch(lines) {
    case 61:
        console.log("Brasilia");
        break;
    case 71:
        console.log("Salvador");
        break;    
    case 11:
        console.log("Sao Paulo");
        break;
    case 21:
        console.log("Rio de Janeiro");
        break;    
    case 32:
        console.log("Juiz de Fora");
        break;
    case 19:
        console.log("Campinas");
        break;    
    case 27:
        console.log("Vitoria");
        break;
    case 31:
        console.log("Belo Horizonte");
        break;  
    default:
        console.log("DDD nao cadastrado");
}

/* DDD
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:




Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.

Exemplo de Entrada	Exemplo de Saída
11

Sao Paulo */