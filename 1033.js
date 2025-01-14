let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.trim().split('\n');
lines.pop();

let b;

class Matriz {
    constructor(n, m) {
        this.n = n;
        this.m = m;
        this.M = [];
        for (let i = 0; i < this.n; ++i) {
            this.M.push([]);
            for (let j = 0; j < this.m; ++j) {
                this.M[i].push(0);
            }
        }
    }
};

const multiplicacao = (m1, m2) => {
    let m3 = new Matriz(m1.m, m2.n);

    for (let i = 0; i < m1.n; ++i) {
        for (let j = 0; j < m2.m; ++j) {
            for (let k = 0; k < m1.m; ++k) {
                m3.M[i][j] += m1.M[i][k] * m2.M[k][j];
                m3.M[i][j] %= b;
            }
        }
    }

    return m3;
};

const potencia = (base, expoente) => {
    if (expoente === 1) {
        return base;
    } else if (expoente % 2) {
        return multiplicacao(base, potencia(base, expoente - 1));
    } else {
        const pot = potencia(base, Math.floor(expoente / 2));
        return multiplicacao(pot, pot);
    }
};

let T = 0;
while (lines.length) {
    let n = 0;
    [n, b] = lines.shift().trim().split(' ').map(x => parseInt(x));

    if (n === 0 && b === 0) {
        break;
    }

    let A = new Matriz(3, 3);
    A.M[0][0] = 1;
    A.M[0][1] = 1;
    A.M[0][2] = 1;
    A.M[1][0] = 1;
    A.M[2][2] = 1;

    let B = new Matriz(3, 1);
    B.M[0][0] = 1;
    B.M[1][0] = 1;
    B.M[2][0] = 1;

    if (n < 2) {
        console.log(`Case ${++T}: ${n} ${b} 1`);
    } else {
        let An1 = potencia(A, n - 1);
        let R = multiplicacao(An1, B);

        console.log(`Case ${++T}: ${n} ${b} ${R.M[0][0]}`);
    }
}

/* Quantas Chamadas Recursivas?
Por Monirul Hasan Tomal, Southeast University  Bangladesh

Timelimit: 1
Os números de fibonacci são definidos pela seguinte recorrência:

fib(0) = 0
fib(1) = 1
fib(n) = fib(n-1)+fib(n-2)
Mas não estamos interessados em números de Fibonacci aqui. Gostaríamos de saber quantas chamadas recursivas seriam necessárias para um determinado número de Fibonacci n, seguindo a recorrência normal. Uma vez que os números serão bem grandes, não será uma tarefa muito simples para você. Mas então vamos torná-la um pouco mais fácil: queremos que você apresente somente o ultimo dígito do numero de chamadas, onde este número deve estar na base b.

Entrada
A entrada consiste em vários casos de teste. Para cada caso de teste haverá dois números inteiros n (0 ≤ n < (263 - 1)) e b (1 < b ≤ 10000). A entrada será terminada por um caso de teste onde n=0 e b=0, que não deve ser processada.

Saída
Para cada caso de teste deve ser impresso o número do caso de teste na saída. Em seguida, imprima n, b e o ultimo dígito (na base b) do número de chamadas. Deverá haver um único espaço entre estes dois números. Note que o ultimo dígito deverá ser apresentado no formato de um número decimal.

Exemplo de Entrada	Exemplo de Saída
0 100
1 100
2 100
3 100
10 10
3467 9350
0 0

Case 1: 0 100 1
Case 2: 1 100 1
Case 3: 2 100 3
Case 4: 3 100 5
Case 5: 10 10 7
Case 6: 3467 9350 7631 */