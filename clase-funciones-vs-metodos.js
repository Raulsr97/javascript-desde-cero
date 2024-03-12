// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback

function a () {} // -> Esto es una declaracion de funcion.
function b (a) {}
b(a)


// Retornar funciones 

function a () {
    function b () {}
    return b
}

// Asignar funciones a variables -> Expresión de función.

const a = function () {} // el nombre de la funcion queda a cargo del nombre de la variable

// Tener propiedades y metodos.

function a () {}
const obj = {}
a.call(obj)

// Anidacion de funciones -> Nested functions

function a () {
    function b () {
        function c () {

        }
        c() 
    }
    b()
}
a() 

// Es posible almacenar funciones en objetos?
// SI es posibles y a esto es lo que se le conoce como metodo

const rocket = {
    name: 'Falcon 7',
    launchMessage: function launchMessage() {
        console.log('🚀');
    } 
}

rocket.launchMessage()
