let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.trim().split("\n");

lines.forEach((line) => {
  let [a, b] = line.trim().split(" ").map((x) => BigInt(x));

  console.log((a ^ b).toString());
});

/* Carrega ou não Carrega?
Por Monirul Hasan Tomal, SEU  Bangladesh

Timelimit: 2
6+9=15 parece ok. Mas como pode estar certo 4+6=2?

Veja só. Mofiz trabalhou duro durante seu curso de Eletrônica Digital, mas quando lhe foi solicitado que implementasse um somador de 32 bits como exame no laboratório, ele acabou fazendo algum erro na parte de projeto. Depois de vasculhar seu projeto por uma hora e meia, ele encontrou seu erro. Ele estava fazendo soma de bits, mas seu carregador de bit (carry) sempre apresentava como saída o valor zero. Portanto,

4  = 00000000 00000000 00000000 00000100
+6 = 00000000 00000000 00000000 00000110
----------------------------------------
2  = 00000000 00000000 00000000 00000010


Claro que já é uma boa coisa ele finalmente ter encontrado o seu erro, mas isso foi muito tarde. Considerando seu esforço durante o curso, o instrutor deu a ele mais uma chance: Mofiz teria que escrever um programa eficiente que pegaria 2 valores decimais de 32 bits sem sinal como entrada e deveria produzir um número de 32 bits sem sinal como saída, ou seja, somando do mesmo modo como o circuito faz.

Entrada
Em cada linha de entrada haverá um par de inteiros separado por um único espaço. A entrada termina com EOF.

Saída
Para cada linha de entrada, o programa deverá fornecer uma linha de saída, que é o valor após somar dois números no modo “Mofiz”.

Exemplo de Entrada	Exemplo de Saída
4 6
6 9

2
15 */