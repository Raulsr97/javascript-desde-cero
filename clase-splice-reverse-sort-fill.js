// Methods that modify the original array (Mutability)

// splice():  Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

const vegetables = ['carrot', 'brocoli', 'onion', 'tomatoe']

const removeVegetables = vegetables.splice(2, 1, 'spinach', 'punkin')
console.log(vegetables);
console.log(removeVegetables);

// reverse(): Invierte el orden de los elementos de una array in place. El primer elemento pasa a ser el ultimo y el ultimo pasa a ser el primero

const numbers = [1, 2, 3, 4, 5]
const reverseNumbers = numbers.reverse()

console.log(numbers);
console.log(reverseNumbers);

// sort(): Ordena los elementos de un array localmente y devuelve el array ordenado.

const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1);
console.log(unicodeSortedNumbers);

const unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
// 4 - 18 = -14
// 18 - 1 = 17
// Itera los numeros realizando la resta hasta que todas las restas den positivas(si la resta es negativa recorre el numero que esta restando a la izquierda)

console.log(unsortedNumbers2);
console.log(sortedNumbers);


// Ordenamiento basandose en UTF-16(podria decirse que se ordena alfabeticamente)
const cities = ['New York', 'Paris', 'Madrid', 'London', 'Amsterdam']
const sortedCities = cities.sort()

console.log(cities);
console.log(sortedCities);


// fill(): Cambia todos los elementos en un array por un valor estatico, desde el indice start(por defecto 0) hasta el indice end(por defecto array.lenght).

const ages = [12, 34, 25, 54]
console.log(ages.fill(0, 2, 4));
console.log(ages.fill(15, 1));
console.log(ages.fill(7));