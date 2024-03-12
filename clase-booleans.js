// una forma de declarar variables para valores booleanos es nombrar a la variables como si fuera una pregunta.
const isActive = true
const hasPermition = false

// Conversion implicita: es esta clase de coversiones tu declaras una situacion verdadera o falsa y el programa te imprime un booleano ya sea verdadero o falso.
const resultado = 5 > 3
const resultadoFalso = 5 < 3
console.log(resultado, resultadoFalso);

const name = 'Raul'
console.log(!!name); // nos indica si el string seleccionado tiene un valor verdadero.

// Conversion explicita
const value = 0 // la funcion Boolean nos toma como falso el valor 0
const otherValue = -432 // mientras que cualquier otro valor aunque sea negativo lo tomara como true
const explicitBoolean = Boolean(otherValue)
console.log(explicitBoolean);


