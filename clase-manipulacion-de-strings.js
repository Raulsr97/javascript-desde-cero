// Strings primitivos (Inmutables)

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien);

// Strings objetos (mutables)

const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto);

// Acceso a caracteres

const saludo = 'Hola. ¿Como estas?'
console.log(saludo[2]);  //Arroja el caracter en la posicion seleccionada en el string
console.log(saludo.charAt(2)); //Arroja el caracter en la posicion seleccionada en el string
console.log(saludo.indexOf('t')); //Arroja la posicion en la que se encuentra el caracter seleccionado.
console.log(saludo.indexOf('Como')); //Arroja la posicion en la que empieza el caracter seleccionado.
console.log(saludo.indexOf('como')); // buscar si alguna palabra en un texto muy largo se encuentra o no, si la palabra no se encuentra aparecera en consola -1
console.log(saludo.lastIndexOf('o')); // busca la ultima posicion de algun caracter repetido.
console.log(saludo.slice(3, 9)); // Selecciona un conjunto de caracteres colocando la posicion de inicio y la posicion donde termina.
console.log(saludo.length); // Nos inidica la longitud en cantidad de caracteres de nuestro string.
console.log(saludo.toLocaleUpperCase()); // transforma al string completo en letras mayusculas
console.log(saludo.toLocaleLowerCase()); // // transforma al string completo en letras minusculas.

const saludoDividido = saludo.split(' ')// esta funcion nos ayuda a dividir un string
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim() // esta funcion corta los caracteres seleccionados en este ejemplo recorta los espacios no necesarios.
console.log(saludoConEspacios);
console.log(saludoSinEspacios);

const saludoOriginal = 'Que tranza bandaaa!'
const nuevoSaludo = saludoOriginal.replace('bandaaa!', 'Pandilla!!') // esta funcion reemplaza uno o un conjunto de caracteres seleccionados por algun otro 
console.log(saludoOriginal);
console.log(nuevoSaludo);


