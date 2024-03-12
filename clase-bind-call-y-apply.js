// Metodos que nos permiten cambiar el contexto de ajecucion


const owner = 'Raul'
const address = 'Calle 7 Pantitlan'

function dogGreeting (owner, address) {
    console.log(`Hi I´m ${this.dogName}, I live with ${owner} on ${address}`);
}

const newHouse = {
    dogName: 'Tommy'
}

// Metodo call
dogGreeting.call(newHouse, owner, address)

// Metodo apply
const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues)

// Metodo bind  

 const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
 bindingWithBind()
