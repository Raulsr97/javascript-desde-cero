// 1. Tipo entero y decimal
const entero = 321
const decimal = 10.23
console.log(typeof entero, typeof decimal);


// 2. Notacion cientifica
const cientifico = 5e3

// 3. infinitos y NaN(Not a number)
const infinito = Infinity
const noEsUnNumero = NaN
console.log(typeof infinito);
console.log(typeof noEsUnNumero);

// Opreaciones aritmeticas

// 1. Suma, resta, multiplicacion y division.
const suma = 3 + 4
const resta = 3 - 4
const multiplicacion = 3 * 4
const division = 3 / 4

//2. Modulo y Exponenciacion
const Modulo = 3 % 4
const Exponenciacion = 2 ** 4

// Precision
const resultado = 0.1 + 0.2
console.log(resultado);
console.log(resultado.toFixed(1)); // esta funcion ayuda a seleccionar cuantos decimales necesitamos
console.log(resultado === 0.3);

// Operaciones Avanzadas

const raizCuadrada = Math.sqrt(16) // esta funcion nos ayuda a saber la raiz cuadrada de un valor
console.log(raizCuadrada);
const valorAbsoluto = Math.abs(-54) // nos ayuda a saber el valor absoluto(los valores absolutos siempre son positivos.)
console.log(valorAbsoluto);
const aleatorio = Math.random() // nos ayuda a seleccionar un numero aleatorio.
console.log(aleatorio);


