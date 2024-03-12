// Una funcion constructora se refiere a construir un objeto a partir de una funcion, esta se puede identificar por que empieza con una letra mayuscula, para agregar elementos al objeto se utiliza la plalabra reservada 'this.' seguido del nombre del elemento 

const personalizedMessage = () => '👨‍🚀🔥🚀'

function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage = ownMessage
}

// Instancia del objeto
const falcon9Rocket =  new Rocket('Falcon 9', personalizedMessage)
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage)


console.log(falcon9Rocket.name);

console.log(falcon9Rocket.launchMessage());



const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Goodbye!!!!'
const eagle10 = RocketWithArrowFunction('Eagle10', personalizedMessageForArrowFunction)

console.log(eagle10.name);
console.log(eagle10.launchMessage());

// ejemplos


const personalizedPresentationMessage = () => '🏎️'

function Car(name, ownPresentation) {
    this.name = name
    this.presentationMessage = ownPresentation 
}

const ferrari = new Car('Ferrari', personalizedPresentationMessage)
console.log(ferrari.name);
console.log(ferrari.presentationMessage())



const carWithArrowFunction = (name, ownPresentation) => ({
    name: name,
    presentation: ownPresentation
})

const personalizedPresentationWithArrowFunction = () => 'This is an amazing car!'

const audi = carWithArrowFunction('Audi', personalizedPresentationWithArrowFunction)

console.log(audi.name);
console.log((audi.presentation()));



const personalizedBrand = () => 'The brand of this motorcycle is: Kawasaki'

function Motorcycle (name, brand) {
    this.name = name
    this.brand = brand
}

const ninja = new Motorcycle('Ninja', personalizedBrand)
console.log(ninja.name);
console.log(ninja.brand());


const motorcycleWithArrowFunction = (name, brand) => ({
    name: name, 
    brand: brand
})

const personalizedBrandWithArrowFunction = () => 'The brand of this motorcycle is: Honda'

const hayabusa = motorcycleWithArrowFunction('Hayabusa', personalizedBrandWithArrowFunction)

console.log(hayabusa.name);
console.log(hayabusa.brand());