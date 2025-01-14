let inicial = 3
let maximo = 1000
let decrem = 2
let valor = 0

while (inicial < maximo) {
    inicial += inicial - decrem;
    valor++;
}
console.log(valor)