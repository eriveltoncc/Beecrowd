// objetivo: faça um código que calcule uma média simples, 
// utilizando um vetor indefinido contendo as notas do aluno.

let notas = [3.4, 7.1, 6.4, 8.2]
let soma = Number();
let quantidade = Number();
let resultadoFinal = Number();

// este 'for' passa por todos os valores do vetor e soma eles na variável 'soma'
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
  // a variável 'quantidade' sempre pega o valor atual do 'i' e soma mais 1,
  // pois os vetores começam no 0, e não no 1, sendo necessário realizar esta correção.
  quantidade = i + 1;
}

resultadoFinal = soma / quantidade

// aqui é realizado o retorno da variável 'resultadoFinal', 
// que divide a soma pela quantidade, anteriormente explicada.
console.log(`MEDIA = ${resultadoFinal.toFixed(2)}`)