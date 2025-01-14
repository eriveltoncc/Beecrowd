let mediaFinal = 4.77; // Média atual
let notaExame = ((60 - (mediaFinal * 6)) / 4);

if (notaExame > 0) {
    console.log(notaExame.toFixed(2)); // Mostra o resultado se positivo
} else {
    console.log("Erro: Média final é muito baixa para aprovação, mesmo com nota máxima no exame.");
}
