// Metodos que iteran sobre un array
// Estos metodos no modifican el array original(Mutabilidad).


// map(): Permite aplicar una funcion a cada elemento de un array y construir un nuevo array con los resultados

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers);
console.log(squareNumbers);

// forEach(): Itera sobre cada elemento de un array y ejecuta una funcion proporcionada para cada elemento, sin crear un nuevo array.


const colors = ['blue', 'red', 'pink', 'orange']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors);
console.log(iteratedColors);


// Exercise Farenheit to Celsius conversion



function transformingFarenheitToCelsius () {
    const fahrenheitTemperatures = [32, 135, 89, 212]
    const celsiusTemperatures = fahrenheitTemperatures.map(num => 5 / 9 * (num - 32))
    console.log(celsiusTemperatures);
}

transformingFarenheitToCelsius()


// Exercise: sum of elements in an array

const newNumbers = [1, 23, 54, 20]

let sum = 0

newNumbers.forEach(number => {
    sum += number
    // sum = sum + number
})
console.log(newNumbers);
console.log(sum);