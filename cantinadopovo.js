let codLanche = 109
let qtde = 3
let valor = Number();

switch (codLanche) {
    case 100:
      valor = 7.50 * qtde;
      break;
    case 101:
      valor = 15.30 * qtde;
      break;
    case 102:
      valor = 4.50 * qtde;
      break;
    case 103:
      valor = 6.00 * qtde;
      break;
    case 104:
      valor = 5.50 * qtde;
      break;
      
    case 105:
      valor = 10.00 * qtde;
      break;

    case 106:
      valor = 11.00 * qtde;
      break;

    case 107:
      valor = 5.00 * qtde;
      break;

    case 108:
      valor = 2.50 * qtde;
      break;

    case 109:
      valor = 8.00 * qtde;
      break;
  }
  
  console.log(`R$ ${valor.toFixed(2)}`)
  