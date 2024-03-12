// Methods that iterate over an array
// Do not modify the orignal array

//find(): Devuelve el valor del primer elemento del array que cumple la funcion de prueba proporcionada.

const multipleOf5 = [5, 10, 15, 20]

const firstNumberGreaterThanTen = multipleOf5.find(number => number > 10)

console.log(firstNumberGreaterThanTen);

//findIndex(): Devuelve el INDICE del primer elemento de un array que satisface una condición prporcionada en forma de funcion. Si no encuentra ningun elemento que cumpla la condicion devuelve -1

const randomNumbers = [3, 76, 5, 8, 10, 25]
const indexNumber = randomNumbers.findIndex(number => number > 50)

console.log(randomNumbers);
console.log(indexNumber);

// exercise: verification problem

const winningParticipants = [
    { id: 1, name: 'Raul', ticketNumber: 1 },
    { id: 5, name: 'Luis', ticketNumber: 6 },
    { id: 14, name: 'Andrea', ticketNumber: 12},
    { id: 20, name: 'Oscar', ticketNumber: 25 },
    { id: 7, name: 'Dafne', ticketNumber: 19 }
]

function findWinnerByName(name) {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || 'No winner found with this name.'
}

function findIndexWinnerByTicket(ticketNumber) {
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
    return index !== -1 ? index : 'No winner found with that ticket number'
}

function displayWinnerinformation(winner) {
    if (winner !== undefined && winner !== null && winner !== 'No winner found with that ticket number') {
        console.log('Winner information: ', winner);
    } else {
        console.log('No winner found.');
    }
}

const winnerByName = findWinnerByName('Raul')
const indexWinnerByTicket = findIndexWinnerByTicket(12)

displayWinnerinformation(winnerByName)
console.log('Index of winner by ticket Number: ', indexWinnerByTicket);


const participantesGanadores = [
    {id: 22, nombre: 'Messi', ticket: 12},
    {id: 32, nombre: 'Ronaldo', ticket: 10},
    {id: 12, nombre: 'Zlatan', ticket: 28},
    {id: 43, nombre: 'Chicharito', ticket: 34},
    {id: 45, nombre: 'Benzema', ticket: 56}

]

function encontrarGanadorPorNombre (nombre) {
    const ganadores = participantesGanadores.find(participantes => participantes.nombre === nombre)
    return ganadores || 'No se encontro ganador en este juego'
}

function encontrarIndiceGanadorPorTickets (ticket) {
    const indice = participantesGanadores.findIndex(participantes => participantes.ticket === ticket)
    return indice !== -1 ? indice : 'No es encontro ganador con este ticket'
}

function desplegarInformacionDelGanador (ganadores) {
    if (ganadores !== undefined && ganadores !== null && ganadores !== 'No se encontro ganador con este ticket') {
        console.log('Informacion del ganador: ', ganadores);
    } else {
        console.log('No se encontro ganador');
    }
}

const ganadoresPorNombre = encontrarGanadorPorNombre('Ronaldo')
const ganadoresPorTicket = encontrarIndiceGanadorPorTickets(12)

desplegarInformacionDelGanador(ganadoresPorNombre)
console.log('Indice del ganador por ticket: ', ganadoresPorTicket);