// objetivo: construa um código que recebe três notas e calcule a média ponderada de um aluno,
// sendo a soma da notaA1 com a notaA2 igual a 60% da nota final, e a nota beecrowd igual aos outros 40%
// (notaA1 + notaA2 = 60%) e (beecrowd = 40%)

let notaA1 = 5
let notaA2 = 8
let beecrowd = 10

// note que a soma das duas primeiras notas é igual a 60%, portanto cada uma tem o peso de 30% da nota final.
// portanto, multiplique as notas pelos seus respectivos pesos e divida-os por 100. Neste caso, 
// os pesos foram dividos antes, e depois multiplicados. Faça da maneira que achar melhor.
let primeiraNota = ((notaA1 * 0.3) + (notaA2 * 0.3));
let segundaNota = 0.4 * (beecrowd);

// soma das notas. Aqui, não houve a divisão, pois 60% + 40% = 100%, ou 0.6 + 0.4 = 1
let resultadoFinal = (primeiraNota + segundaNota);
console.log(`MEDIA = ${resultadoFinal.toFixed(2)}`);

// ação situacional que verifica a média final do aluno e retorna a situação dele, se foi aprovado, reprovado ou se está em exame.
if (resultadoFinal >= 7.5) {
  console.log('ALUNO APROVADO');
} else if (resultadoFinal >= 4 && resultadoFinal < 7.5) {
  console.log('ALUNO EM EXAME');
} else if (resultadoFinal < 4) {
  console.log('ALUNO REPROVADO')
}
