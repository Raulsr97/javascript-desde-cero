// Methods that DO NOT modify the original array (Immutability)

// concat(): une dos o mas arrays

const morseCode1 = ['....', '---'] // H O 
const morseCode2 = ['.-..', '.-']  // L A

// combine with concat() way 1

const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage);

// combine with concat() way 2

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)

console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage);

// Combine with Spread operator

function combineMorseMessages (morseCode1, morseCode2) {
    console.log([...morseCode1, ...morseCode2]);
}

combineMorseMessages(morseCode1, morseCode2)

const numbers = [1, 2, 3]
const string = 'string'

combineMorseMessages(numbers, string)

// Join() Concatena todos los elementos de un array en una cadena de texto separados por un delimitador especificado 

const morseCodeMessageString = morseCodeMessage.join(' e ')

console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessageString);


// PRACTICANDO CON LA PALABRA HOLA

const primerParteMensaje = ['H', 'O']
const segundaParteMensaje = ['L', 'A']

const uniendoMensaje = primerParteMensaje.concat(segundaParteMensaje)

console.log(primerParteMensaje);
console.log(segundaParteMensaje);
console.log(uniendoMensaje);

const uniendoMensaje2 = [].concat(primerParteMensaje, segundaParteMensaje)

console.log(uniendoMensaje2);

function uniendoMensaje3 (primerParteMensaje, segundaParteMensaje) {
    console.log([...primerParteMensaje, ...segundaParteMensaje]);
}

uniendoMensaje3(primerParteMensaje, segundaParteMensaje)

const juntarLetras = uniendoMensaje.join('.')
console.log(juntarLetras);