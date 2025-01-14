let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n');

let notas = lines.shift().split(' ');
let nota = [];

for (let i = 0; i < 4; i++){
    nota[i] = parseFloat(notas.shift());
}

let notaExame = parseFloat(lines.shift());

let media = ((nota[0]*2) + (nota[1]*3) + (nota[2]*4) + (nota[3]*1)) / 10;
let mediaFinal = (media + notaExame) / 2;

let aprovado = media >= 7.0;
let emExame = media >= 5.0 && media <= 6.9;

if(aprovado){
    console.log('Media: ' + media.toFixed(1));
    console.log('Aluno aprovado.');
} else if(emExame){
    console.log('Media: ' + media.toFixed(1));
    console.log('Aluno em exame.');
    console.log("Nota do exame: " + notaExame.toFixed(1));
    if(mediaFinal >= 5.0){
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado.');
    }
    console.log('Media final: ' + mediaFinal.toFixed(1));
} else {
    console.log('Media: ' + media.toFixed(1));
    console.log('Aluno reprovado.');
}

/* Média 3
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.

Entrada
A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

Saída
Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error".

Exemplo de Entrada	Exemplo de Saída
2.0 4.0 7.5 8.0
6.4

Media: 5.4
Aluno em exame.
Nota do exame: 6.4
Aluno aprovado.
Media final: 5.9 */