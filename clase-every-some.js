// Methods that DO NOT modify the original array (Inmutability)

//every(): Determina si todos los elementos en el array satisfacen una condicion.

const ages = [21, 23, 56, 18, 65]

const allAreAdults = ages.every(age => age >= 18)

console.log(ages);
console.log(allAreAdults);  

// some()

const atLeastOneIsOver30 = ages.some(age => age > 30)

console.log(atLeastOneIsOver30);
