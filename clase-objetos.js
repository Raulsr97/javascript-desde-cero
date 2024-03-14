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
