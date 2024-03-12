// Social media profile

// 1. User informartion
const userName = 'Rulosr'
const fullName = 'Raul Salinas'
const age = '26'
const isStudent = true

// 2. Adress
const address = {
    street: 7,
    city: 'CDMX',
    country: 'Mexico',
    zipCode: 81008
}

// 3.Hobbies

const hobbies = ['jugar al fubol', 'ver series', 'codear']

//4. generating presonalized bio

const personalizedBio = `Hola mi nombre es ${fullName}. 
Tengo ${age} años.
Vivo en ${address.city}.
yo amo ${hobbies.join(', ')}.
Sigueme para conocerme mas.
`

// 5.print the user profile

console.log(personalizedBio);