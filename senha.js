let senha = "abc"
let tentativas = ["123", "qwe", "0109"]
let tentativasRestantes = 3;

for (let i = 0; i < tentativas.length; i++) {
    if (tentativas[i] === senha) {
        console.log("Acesso Permitido");
        break;
    } else {
        console.log("Senha incorreta");
        tentativasRestantes--;
    }

    if (tentativasRestantes === 0) {
        console.log("Acesso Bloqueado");
    }
}