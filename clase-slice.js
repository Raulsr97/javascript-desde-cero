// slice(): Crea una copia superficial(shallow copy) de una porcion del array, especificada por indices de inicio a fin 

const animals = ['ant', 'lion', 'bison', 'eagle', 'dog', 'gorilla'] 

console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 6));

console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());