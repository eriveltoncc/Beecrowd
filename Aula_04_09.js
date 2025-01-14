// primeira parte

let espressao = 2
let texto = '!'
switch (expressao) {
    case 1:
        texto += '1'
    case 2:
        texto += '2'
    case 3:
        texto += '3'
}
console.log(texto)


//segunda parte

let expressao = 2
let texto = '!'
switch (expressao) {
    case 1:
        texto += '1'
    case 2:
        texto += '2'
        break
    default:
        texto += '3'
        break
}
console.log(texto)

//terceira parte

let vlista = ["banana", "maça", "pera", "laranja", "abacate"]
for(let i =0; i < 5; i++){
    console.log(vlista[i])
}

for (const key in vlista){
    console.log(key)
}

for (const iterator of vlista){
    console.log(iterator)
}