// objetivo: construir um código que calcule o salário do funcionário,
// levando em consideração o nível de experiência e o tempo gasto no projeto. 

// senioridade -> nível de experiência; Tabela do preço por hora no fim do código.
// tempoProjeto -> tempo gasto no projeto;
let senioridade = 4;
let tempoProjeto = 50;
let orcamento = Number();

// este switch pega o nível de experiência do funcionário e multiplica pelo tempo de projeto, tudo de acordo com a tabela de preços.
switch (senioridade) {
  case 1:
    orcamento = 1.99 * tempoProjeto;
    break;
  case 2:
    orcamento = 8.50 * tempoProjeto;
    break;
  case 3:
    orcamento = 12.50 * tempoProjeto;
    break;
  case 4:
    orcamento = 19.99 * tempoProjeto;
    break;
  case 5:
    orcamento = 25.75 * tempoProjeto;
    break;
}

console.log(`R$ Orçamento: ${orcamento.toFixed(2)}`)

// 1 - Estagiário: 1,99
// 2 - Junior: 8,50
// 3 - Pleno: 12,50
// 4 - Senior: 19,99
// 5 - Especialista: 25,75