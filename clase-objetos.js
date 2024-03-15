/* 
Estructura de datos

key / value

 
objeto = {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor

    Metodos
}

*/

const persona ={
    nombre: 'Raul',
    edad: 26,
    direccion: {
        calle: 'Calle 7 272',
        ciudad: 'CDMX'
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    }
}

console.log(persona);

console.log(persona.nombre);
persona.saludar()

// Añadiendo una nueva propiedad:

persona.telefono = '5611861455'

console.log(persona);
console.log(persona.telefono);


// Añadiendo un nuevo metodo:

persona.despedir = () => {
    console.log('Adios');
}
persona.despedir()

console.log(persona);

// Ingresando a los elementos de un metodo:

console.log(persona.direccion.calle);


// Eliminando una propiedad:

delete persona.telefono

console.log(persona);

// Eliminando un metodo: el metodo no se puede eliminar pero si se le puede asignar un valor indefinido.


