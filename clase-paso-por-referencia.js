// Paso por referencia - tipo de dato complejo

let frutas = {
    naranja: '🍊'
}

let vegetales = frutas
vegetales.naranja = '🥦'

console.log(frutas, vegetales);


let ropa = {
    blusa: '👚'
}

ropa.pantalon = '👖'

console.log(ropa);