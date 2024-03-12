// Tipo de dato primitivo-inmutable
let numero = 23
numero = numero + 10 
console.log(numero);

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero);

// Tipo de dato complejo-mutable
let usuario = {
    nombre: 'Raul',
    edad: 26
}
usuario.edad = 30
console.log(usuario);

let frutas = ['manzana', 'pera', 'fresa']
frutas[0] = 'sandia'
console.log(frutas);

function cambiarNombre (objeto) {
    objeto.nombre = 'Raul Salinas'
}

let persona = {
    nombre: 'Raul'
}

cambiarNombre(persona)

console.log(persona);