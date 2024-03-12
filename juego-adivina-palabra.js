/*  

Jugemos a adivinar la palabra.

El usuario tiene 3 intentos para adivinar la palabra oculta.

Requerimientos:

- El juego debe tener una palabra oculta.
- El juego puede dar 1 pista de la palabra.
- El usuario debe ingresar su suposición.
- El juego debe verificar si la suposición del usuario es correcta.
- El juego debe tener un numero limitado de intentos.
- El juego debe terminar cuando el usuario adivine la palabra oculta o se quede sin intentos. 
*/

let palabraOculta = 'moto'
let intentos = 3

function verificarSuposicion (suposicion, palabraOculta) {
    if(suposicion.toLowerCase() === palabraOculta) {
        return true;
    }
    return false;
}

function jugarAdivinaLaPalabra () {
    alert('Bienvenido a Adivina la palabra oculta')
    alert('Tienes 3 intentos para adivinar la palabra')
    alert('Te doy una pista: la palabra es un medio de transporte')

    while (intentos > 0) {
        let suposicion = prompt('ingresa la palabra')

        if(verificarSuposicion(suposicion, palabraOculta)) {
            alert('Adivinaste!!! haz ganado ;)')
            break;
        } else {
          intentos--;
          if(intentos > 0) {
            alert(`Incorrecto, Aun tienes ${intentos} intentos restantes.`)
          }  else {
            alert(`Agotaste tus intentos la palabra oculta era ${palabraOculta} :(`)
          }
        }
        
    }
}

jugarAdivinaLaPalabra()


