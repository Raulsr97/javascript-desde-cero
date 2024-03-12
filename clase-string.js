// Creacion de strings

const primeraOpcion = 'Comillas Simples'
const segundaOpcion = "Comillas dobles"
// Las comillas invertidas se colocan con altgr + } presionando dos veces
const terceraOpcion = `Comillas invertidas`

// Concatenacion: Opcion +

const direccion = 'Calle 7'
const ciudad = 'CDMX'
const direccionCompleta = 'Mi direccion completa es '  + direccion  + ' ' + ciudad

console.log(direccionCompleta);

// Concatenacion: Template literals
const nombre = 'Raul'
const deporte = '⚽'
const presentacion = `Hola, mi nombre es ${nombre} y mi deporte favorito es ${deporte}`
console.log(presentacion);

// Concatenacion: join() (fumviona para arrays)

const primeraParte = 'Me gusta'
const segundaParte = 'salir con mis a amigos a'
const terceraParte = '🍻'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' 🚶‍♂️ '));

// Concatenacion: concat()
const hobbie1 = 'Escuchar musica'
const hobbie2 = 'ir al gym'
const hobbie3 = 'conocer lugares nuevos'

const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3)
console.log(hobbies);


// Caracteres de escape

const whatDoIDo = "i'm software engineer" // escape alternativo con comilla doble

const age = 'I\'m 26 years old' //Barra invertida( Alt gr + ?)

const escapeComillaInvertida = `i'm software engineer` //template literals


// Escritura de strings largos \n = salto de linea

/*
    Las rosas son rojas, 
    Las violetas son azules,
    Caracter inesperado,
    En la linea 86
*/

const poema = 'Las rosas son rojas,\n' +
              'Las violetas son azules,\n' +
              'Caracter inesperado,\n' +
              'En la linea 86'
console.log(poema);

const poema2 = 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86'
console.log(poema2);

const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86`
console.log(poema3);