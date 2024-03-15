// let persona = {
//     nombre: 'Raul',
//     apellido: 'Salinas',
//     edad: 26
// }

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona('Raul', 'Salinas', 26)
console.log(persona1);

persona1.nacionalidad = 'Mexicano'
console.log(persona1);

const persona2 = new Persona('Andrea', 'Miguel', 24)
console.log(persona2);

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar()
persona2.saludar()


