let notaA1 = 5.36
let notaA2 = 6.20
let notaA3 = 9.87
let notaA4 = 10.00
let notaA5 = 10.00

let primeiraNota = ((notaA1 * 0.3) + (notaA2 * 0.3) + (notaA3 * 0.2) + (notaA4 * 0.1) + (notaA5 * 0.1));

let resultadoFinal = (primeiraNota);
console.log(`MEDIA = ${resultadoFinal.toFixed(2)}`);

if (resultadoFinal >= 7.35) {
  console.log('ALUNO APROVADO');
} else if (resultadoFinal >= 4 && resultadoFinal < 7.34) {
  console.log('ALUNO EM EXAME');
} else if (resultadoFinal < 4) {
  console.log('ALUNO REPROVADO')
}
