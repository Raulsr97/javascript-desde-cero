// Solo las clases y la funciones constructoras generan PROTOTIPOS

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log('El animal emite un sonido');
    }
}

class Perro extends Animal{
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido() {
        console.log('El perro ladra');
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perro1 = new Perro('Tommy', 'Perro', 'Gran Danes')

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function() {
    console.log('Este es un metodo');
}

console.log(perro1);
perro1.nuevoMetodo()

Perro.prototype.segundoMetodo = function() {
    console.log('Es otro nuevo metodo');
}

Perro.prototype
perro1.segundoMetodo()

console.log(Perro);

perro1.segundoMetodo()


// const caballo = new Animal('Bojack', 'Caballo')

// console.log(caballo);
// caballo.emitirSonido();