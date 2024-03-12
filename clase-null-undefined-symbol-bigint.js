// Null  (en consola aparece que es un objeto pero esto es un error de JavaScript ya que null es un tipo de dato PRIMITIVO)

const snoopy = null
console.log(snoopy);
console.log(typeof(snoopy));

// Undefined ( la variable existe pero no tiene ningun tipo de asignacion relacionada)
let name
console.log(name);

// Symbol ( nos ayuda para escribir valores unicos y que no queremos que cambien)
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2);

const ID = Symbol('id')
let user = {}
user[ID] = 1234
console.log(user);

// Bigint (Apoyo para calculos matematicos donde los numeros son muy grandes) 
// la (n) se coloca para que en consola aparezca el numero completo ya qie si no lo colocas te apareceria el numero pero con exponenciación.


const bigNumber = 1231312321342345354354354353453453443n
console.log(bigNumber);

const numberOfParticles = 1000000000000000000000000000000000000000000000000000000000000000000000000n
console.log(numberOfParticles);



