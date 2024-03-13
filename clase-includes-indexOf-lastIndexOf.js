// includes(): Determina si un array incluye un determinado elemento, devuelve true o false segun corresponda

const numbers = [1, 2, 3, 4, 5]
const result1 = numbers.includes(3)

console.log(result1);

const resutl2 = numbers.includes(8)

console.log(resutl2);

// indexOf(): retorna el primer indice en donde se puede encontrar un elemento dado en el array o retorna -1 si el elemento no esta presente 

const fruits = ['apple', 'strawberry', 'pineaple', 'strawberry', 'watermelon']

const index1 = fruits.indexOf('strawberry')
console.log(index1);

const index2 = fruits.indexOf('grapes')
console.log(index2);

// lastIndexOf(): retorna el ultimo indice en donde se puede encontrar un elemento dado en el array o retorna -1 si el elemento no esta presente 

const index3 = fruits.lastIndexOf('strawberry')
console.log(index3);

const index4 = fruits.lastIndexOf('grapes')
console.log(index4);


// exercise: Finding Substrings Index

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi']
const target = 'banana'

function findStringIndexInArray (array, target) {
    const result = {
        includesTargetString: false,
        firstOcurrentIndex: -1,
        lastOcurrentIndex: -1
    }

    array.forEach((element, index) => {
        if (element.includes(target)){
          result.includesTargetString = true
          result.firstOcurrentIndex = array.indexOf(target)
          result.lastOcurrentIndex = array.lastIndexOf(target)  
        }
    })

    return result
}

const result = findStringIndexInArray(stringArray, target)
console.log(result);

