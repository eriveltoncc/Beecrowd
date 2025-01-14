let x = 6; // Número de entrada
let pares = 0, impares = 0, totalPares = 0, totalImpares = 0;

for (let i = 1; i <= x; i++) {
    if (i % 2 === 0) {
        pares++;
        totalPares += i;
    } else {
        impares++;
        totalImpares += i;
    }
}

console.log(`Pares: ${pares} Total: ${totalPares}`);
console.log(`Impares: ${impares} Total: ${totalImpares}`);
