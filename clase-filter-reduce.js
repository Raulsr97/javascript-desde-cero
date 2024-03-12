// Methods that iterate over an array.
// Methods that do not modify the original array

// filter(): Crean un nuevo array con elementos que cumplen con una condicion dada por una funcion

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers);
console.log(evenNumbers);

// reduce(): Ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce);
console.log(sum);

 // reduce(): case2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrequency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrequency);

// exercise: passing grade average  

const grades = [23, 46, 89, 70, 76, 98, 59, 68, 87]

const passingGrades = grades.filter(grade => grade >= 70)
console.log(passingGrades);

const averageGrades = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log(averageGrades);