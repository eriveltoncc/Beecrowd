let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let N = parseInt(lines.shift());

for(let i = 0; i < N; ++i){
    let M = lines.shift().trim().split('');

    M = M.map((x) => x.match(/[A-Za-z]/i) ? String.fromCharCode(x.charCodeAt(0) + 3) : x);
    M.reverse();
    let metade = parseInt(Math.floor(M.length/2));
    M = M.map((x, i) => i < metade ? x : String.fromCharCode(x.charCodeAt(0) - 1));

    let resposta = M.join('');

    console.log(resposta);
}

/* Criptografia
Por Neilor Tonin, URI  Brasil

Timelimit: 1
Solicitaram para que você construisse um programa simples de criptografia. Este programa deve possibilitar enviar mensagens codificadas sem que alguém consiga lê-las. O processo é muito simples. São feitas três passadas em todo o texto.

Na primeira passada, somente caracteres que sejam letras minúsculas e maiúsculas devem ser deslocadas 3 posições para a direita, segundo a tabela ASCII: letra 'a' deve virar letra 'd', letra 'y' deve virar caractere '|' e assim sucessivamente. Na segunda passada, a linha deverá ser invertida. Na terceira e última passada, todo e qualquer caractere a partir da metade em diante (truncada) devem ser deslocados uma posição para a esquerda na tabela ASCII. Neste caso, 'b' vira 'a' e 'a' vira '`'.

Por exemplo, se a entrada for “Texto #3”, o primeiro processamento sobre esta entrada deverá produzir “Wh{wr #3”. O resultado do segundo processamento inverte os caracteres e produz “3# rw{hW”. Por último, com o deslocamento dos caracteres da metade em diante, o resultado final deve ser “3# rvzgV”.

Entrada
A entrada contém vários casos de teste. A primeira linha de cada caso de teste contém um inteiro N (1 ≤ N ≤ 1*104), indicando a quantidade de linhas que o problema deve tratar. As N linhas contém cada uma delas M (1 ≤ M ≤ 1*103) caracteres.

Saída
Para cada entrada, deve-se apresentar a mensagem criptografada.

Exemplo de Entrada	Exemplo de Saída
4
Texto #3
abcABC1
vxpdylY .ph
vv.xwfxo.fd

3# rvzgV
1FECedc
ks. \n{frzx
gi.r{hyz-xx */