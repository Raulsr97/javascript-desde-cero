/*  

for in -----> objetos (propiedades = valor)

for (variable in objeto) {
    codigo a ejecutar
}


*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 4,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for(fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}


const listaEscolar = {
    cuadernos: 6,
    plumas: 3,
    pegamento: 1,
    colores: 20
}

for (utiles in listaEscolar) {
    console.log(`${utiles} : ${listaEscolar[utiles]}`);
}

