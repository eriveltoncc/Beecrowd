let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.trim().split('\n');

const comp = (a, b) => a[0] - b[0];

let p = 0;
while (p < lines.length) {
    let N = parseInt(lines[p++]);
    let pontos = [];
    for (let i = 0; i < N; ++i) {
        let numeros = lines[p++].trim().split(' ').map(x => parseInt(x));
        pontos.push([numeros[0], numeros[1]]);
    }
    pontos.sort(comp);

    let DP = [];
    DP.push([1, 1]);
    let resposta = 1;
    for (let i = 1; i < N; ++i) {
        DP.push([1, 1]);

        for (let j = 0; j < i; ++j) {
            if (pontos[i][0] == pontos[j][0]) {
                break;
            }

            if (pontos[i][1] - pontos[j][1] === 2) {
                // Descendo, acrescentando mais um no caso em que j está acima
                DP[i][1] = Math.max(DP[i][1], DP[j][0] + 1);
            } else if (pontos[i][1] - pontos[j][1] === -2) {
                // Subindo, acrescentando mais um no caso em que j está abaixo
                DP[i][0] = Math.max(DP[i][0], DP[j][1] + 1);
            }
        }

        resposta = Math.max(resposta, DP[i][0], DP[i][1]);
    }

    console.log(resposta);
}

/* Onda Crítica
Por Monirul Hasan Tomal, Southeast University  Bangladesh

Timelimit: 2
A tarefa é simples. Através de alguns pontos críticos em 2D, você deve desenhar uma onda como uma curva. Seu objetivo é incluir tantos pontos quantos forem possível.

Haverá uma linha imaginária y = a, a qual chamaremos de eixo principal para a curva.
Todos os pontos na curva deverão ter diferentes coordenadas x. Suas coordenadas y devem ser na forma a-1 ou a+1.
Dois pontos consecutivos na curva devem ter diferença de 2 na coordenada y.

Entrada
Haverá no máximo, 222 casos de testes. Cada caso inicia com um inteiro N, que é o número de pontos no caso de teste. Nas próximas N linhas, haverá N pares de inteiros dando as coordenadas x e y de cada ponto. Não haverá mais do que 1000 pontos em cada caso de teste. Todas coordenadas são inteiros – eles devem ficar dentro de um inteiro de 2 bytes com sinal. Os dados devem ser lidos da entrada padrão.

Saída
Para cada caso de teste, imprima um número – o número máximo de pontos críticos que podem ser incluídos em uma curva desenhada a partir dos pontos dados.

Exemplo de Entrada	Exemplo de Saída
10
0 1
1 0
1 -1
2 -2
3 1
3 -1
3 -2
4 1
4 -1
5 -1
10
0 2
2 0
1 -1
2 -2
3 1
3 -1
3 -2
4 1
4 -1
5 –1

4
3 */