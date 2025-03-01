let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.trim().split('\n');

lines.pop();

let inversoes = 0;

comp = (a, b) => a - b;

merge = (V, inicio, meio, fim) => {
    let aux = Array(fim - inicio);
    let i = 0, i1 = inicio, i2 = meio, n1 = meio, n2 = fim;

    while(i1 < n1 && i2 < n2){
        if(comp(V[i1], V[i2]) < 0){
            aux[i++] = V[i1++];
        }else{
            aux[i++] = V[i2++];
            inversoes += (n1 - i1);
        }
    }

    while(i1 < n1)  aux[i++] = V[i1++];
    while(i2 < n2)  aux[i++] = V[i2++];

    for(let i = inicio; i < fim; ++i){
        V[i] = aux[i - inicio];
    }
};

mergeSort = (V, inicio, fim) => {
    if(fim - inicio > 1){
        let meio = Math.floor((inicio + fim)/2);

        mergeSort(V, inicio, meio);
        mergeSort(V, meio, fim);
        merge(V, inicio, meio, fim);
    }
};

while(lines.length){
    let P = lines.shift().trim().split(' ').map((x) => parseInt(x));
    P.shift();

    inversoes = 0;
    mergeSort(P, 0, P.length);

    console.log(inversoes % 2 ? "Marcelo" : "Carlos");
}

/* Bolhas e Baldes
Por Cláudio L. Lucchesi  Brasil

Timelimit: 3
Andrea, Carlos e Marcelo são muito amigos e passam todos os finais de semana à beira da piscina. Enquanto Andrea se bronzeia ao sol, os dois ficam jogando Bolhas. Andrea, uma cientista da computação muito esperta, já disse a eles que não entende por que passam tanto tempo jogando um jogo tão primário.

Usando o computador portátil dela, os dois geram um inteiro aleatório N e uma seqüência de inteiros, também aleatória, que é uma permutação de 1, 2, . . . ,N.

O jogo então começa, cada jogador faz um movimento, e a jogada passa para o outro jogador. Marcelo é sempre o primeiro a começar a jogar. Um movimento de um jogador consiste na escolha de um par de elementos consecutivos da seqüência que estejam fora de ordem e em inverter a ordem dos dois elementos. Por exemplo, dada a seqüência 1, 5, 3, 4, 2, o jogador pode inverter as posições de 5 e 3 ou de 4 e 2, mas não pode inverter as posições de 3 e 4, nem de 5 e 2. Continuando com o exemplo, se o jogador decide inverter as posições de 5 e 3 então a nova seqüência será 1, 3, 5, 4, 2.

Mais cedo ou mais tarde, a seqüência ficará ordenada. Perde o jogador impossibilitado de fazer um movimento. Andrea, com algum desdém, sempre diz que seria mais simples jogar cara ou coroa, com o mesmo efeito. Sua missão, caso decida aceitá-la, é determinar quem ganha o jogo, dada a seqüência inicial.

Entrada
A entrada contém vários casos de teste. Os dados de cada caso de teste estão numa única linha, e são inteiros separados por um espaço em branco. Cada linha contém um inteiroN (2 ≤ N ≤ 105), seguido da seqüência inicial P = (X1, X2, ...,XN) de N inteiros distintos dois a dois, onde1 ≤ Xi ≤ N para 1 ≤ i ≤ N.

O final da entrada é indicado por uma linha que contém apenas o número zero.

Saída
Para cada caso de teste da entrada seu programa deve imprimir uma única linha, com o nome do vencedor, igual a Carlos ou Marcelo., sem espaços em branco.

Exemplo de Entrada	Exemplo de Saída
5 1 5 3 4 2
5 5 1 3 4 2
5 1 2 3 4 5
6 3 5 2 1 4 6
5 5 4 3 2 1
6 6 5 4 3 2 1
0

Marcelo
Carlos
Carlos
Carlos
Carlos
Marcelo */