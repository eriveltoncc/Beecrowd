let sexo = 'M'
let altura = 1.89
let valor = Number();

switch (sexo) {
    case 'M':
      valor = (72.7 * altura) - 58;
      break;
    case 'F':
      valor = (62.1 * altura) - 44,7;
      break;
    }
      console.log(`Peso ideal: ${valor.toFixed(2)}`)