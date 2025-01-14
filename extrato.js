let saldoIni = 1000
let operacao = [1, 2, 1]
let valor = [190, 20, 900]

let saldoAtual = saldoIni;

for (let i = 0; i < operacao.length; i++) {
    if (operacao[i] === 1) { 
        saldoAtual -= valor[i];
    } else if (operacao[i] === 2) { 
        saldoAtual += valor[i];
    } else if (operacao[i] === 3) { 
        console.log(`Saldo Atual: ${saldoAtual}`);
    }
}

console.log(`Saldo Final: ${saldoAtual}`);



