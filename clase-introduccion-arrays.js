// How to create an array

// 1. new Array() or Array()

const fruits = Array('apple', 'Banana', 'Orange')
console.log(fruits);

const numbers = Array(1, 2, 3, 4, 5)
console.log(numbers);

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber);

const emptyArray = []
console.log(emptyArray);

const sports = ['soccer', 'tenis', 'box']
console.log(sports);

const recipeIgredients = [
    'Flour',
    true,
    321,
    {
        ingredients: 'milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIgredients);

// accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit);

// lenght property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutability

fruits.push('Watermelon')
console.log(fruits);

// Inmutability

const newFruits = fruits.concat(['grape', 'Kiwi'])
console.log(fruits);
console.log(newFruits);

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray);

// Practical exercise: sum all elements of an array.

const numbersArray = [1, 2, 4, 5, 9]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}
console.log(sum);