function mult(a,b){
    return a*b
}
function add(a,b){
    return a + b
}
function calcular (a,b,fn){
    return fn(a,b)
}
const divd = function (a,b) {return a/b}

console.log(calcular(10,5,add))
console.log(calcular(10,5,mult))

console.log(calcular(10,5,(i,j) => i-j))
console.log(calcular(10,5,divd))
console.log(calcular(10,5,function (a,b){return a/b}))
console.log(divd(2,10,))