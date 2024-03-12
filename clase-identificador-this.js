// Enlace implicito (Implicit binding)

const house = {
    dogName: 'Tommy',
    dogGreeting: function () {
        console.log(`Hi I´m ${this.dogName}`);
    }
}

house.dogGreeting()

//Enlace explicito (explicit binding)

function dogGreeting () {
    console.log(`Hi I´m ${this.dogName}`);
}

const newHouse = {
    dogName: 'Tobias',
    dogAge: 3
}
dogGreeting.call(newHouse)




function newDogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'Raul'
const address = 'Calle7 272'

newDogGreeting.call(newHouse, owner, address)

// Enlace implicito (Implicit binding)

const catHouse = {
    catName: 'Michi',
    catGreeting: function () {
        console.log(`Hi I´m ${this.catName}`);
    }
}
catHouse.catGreeting()

// Enlace explicito (Explicit binding)

function greetingCat () {
    console.log(`Hi I´m ${this.catName}`);
}

const newCatHouse = {
    catName: 'Karencio',
}

greetingCat.call(newCatHouse)


function NewGreetingCat (owner1, address1) {
    console.log(`Hi I´m ${this.catName}, I live with ${owner1} on ${address1}`);
}

const owner1 = 'Karen'
const address1 = 'Cat street 43'

const catMansion = {
    catName: 'Pelusa'
}

NewGreetingCat.call(catMansion, owner1, address1)