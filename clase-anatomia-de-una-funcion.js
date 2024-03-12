// Ejercicio: crear un programa para conocer el precio con descuento de un prenda, conociendo el precio original y el decuento.

//  Paso 1: Crear una funcion que reciba como inputs precio y descuento
function calculatePriceWithDiscount (price, discounPercentage) {



    // Paso2 : se crea una variable que contenga la formula para conocer el decuento.
    const discount = (price * discounPercentage) / 100
    // Paso 3: se crea una variable que indique cuanto es el precio con descuento.
    const priceWithDiscount = price - discount

    // Paso4: se retorna el precio con descuento
    return priceWithDiscount
}
//Se genera una variable para guardar el valor del precio original
const originalPrice = 100
// Se genera una variable que va a almacenar el valor del descuento 
const discounPercentage = 20
// Se genera una variable que va a mandar llamar a la funcion asignando de parametros a las dos variables anteriores
const finalPrice = calculatePriceWithDiscount(originalPrice, discounPercentage)

// imprimimos los resultados para verlos en consola

console.log('Original Price: $' + originalPrice);
console.log('Discount: ' + discounPercentage + '%');
console.log('Price with discount $' + finalPrice);



