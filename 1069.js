let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let N = parseInt(lines.shift());

for(let k = 0; k < N; ++k){
    let expressao = lines.shift().trim();

    let resposta = 0;
    let parenteses = 0;
    for(let i = 0; i < expressao.length; ++i){
        if(expressao[i] == '<'){
            parenteses += 1;
        }else if(expressao[i] == '>' && parenteses > 0){
            parenteses -= 1;
            resposta += 1;
        }
    }

    console.log(resposta);
}

/* Diamantes e Areia
Por Neilor Tonin, URI  Brasil

Timelimit: 1
João está trabalhando em uma mina, tentando retirar o máximo que consegue de diamantes "<>". Ele deve excluir todas as particulas de areia "." do processo e a cada retirada de diamante, novos diamantes poderão se formar. Se ele tem como uma entrada .<...<<..>>....>....>>>., três diamantes são formados. O primeiro é retirado de <..>, resultando  .<...<>....>....>>>. Em seguida o segundo diamante é retirado, restando .<.......>....>>>. O terceiro diamante é então retirado, restando no final .....>>>., sem possibilidade de extração de novo diamante.

Entrada
Deve ser lido um valor inteiro N que representa a quantidade de casos de teste. Cada linha a seguir é um caso de teste que contém até 1000 caracteres, incluindo "<,>, ."

Saída
Você deve imprimir a quantidade de diamantes possíveis de serem extraídos em cada caso de entrada.

Exemplo de Entrada	Exemplo de Saída
2

<..><.<..>>

<<<..<......<<<<....>

3

1 */