// Explicit type Casting (conversion de datos explicita)

const string = '32'
const integer = parseInt(string) // esta funcion nos ayuda a cambiar el tipo de dato
console.log(integer);
console.log(typeof integer);

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float);
console.log(typeof float);

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal);
console.log(typeof decimal);

// Implicit Type Casting

const sum = '5' + 3 // transforma el numero a string y los concatena dando como resultado '53'
console.log(sum);

const sumWithBoolean = '3' + true // transforma el booleano a string y los concatena dando como resultado '3true'
console.log(sumWithBoolean);

const sumWithNumber = 2 + true // transforma el booleano a numero y realiza la operacion correspondiente'
console.log(sumWithNumber);

const stringValue = '19'
const numberValue = 19
const booleanValue = true

console.log('----------------------');

// Siempre que haya un string va a concatenar, sin string suma

console.log(stringValue + stringValue); //1919 (conactenan)
console.log(stringValue + numberValue); //1919 (conactenan)
console.log(stringValue + booleanValue); //19true (conactenan)

console.log(numberValue + stringValue); //1919 (conactenan)
console.log(numberValue + numberValue); //38 (suman)
console.log(numberValue + booleanValue); //20 (suman)

console.log(booleanValue + stringValue); //true19 (concatenan)
console.log(booleanValue + numberValue); //20 (suman)
console.log(booleanValue + booleanValue); //2 (suman)