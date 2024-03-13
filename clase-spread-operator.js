// 1. Copy an Array

const originalArray = [1, 2, 3, 4, 5]
const copyOfArray = [...originalArray]

console.log(originalArray);
console.log(copyOfArray);

// 2. Combining Arrays 

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combineArray =[...array1, ...array2]

console.log(combineArray);

// 3. Creating arrays with aditional elements

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(arrayWithAdditionalElements);

// 4. pass elements to functions

function sum (a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers)

console.log(result);