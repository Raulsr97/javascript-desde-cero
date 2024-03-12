// switch(expresion) {
//     case valor1:
//         // codigo a ejecutar
//         break
//     case valor2:
//         // codigo a ejecutar
//         break
//     case valor3:
//         // codigo a ejecutar
//         break
//     case valor4:
//         // codigo a ejecutar
//         break
//     default:
//         // codigo 
//     }
 
let expr = 'Manzanas'

switch (expr)  {
    case 'Naranjas':
        console.log('Las naranjas cuestan $20 el kilo');
        break;
    case 'Manzanas':
        console.log('Las Manzanas cuestan $43 el kilo');
        break;
    case 'Platanos':
        console.log('Los platanos cuestan $30 el kilo');
        break;
    case 'Mangos':
    case 'Papayas':
        console.log('Las papayas y los mangos cuestan $35 el kilo');
        break;
    default:
        console.log(`Lo siento no contamos con ${expr}`);
}

console.log('¿Hay algo mas que desees?');