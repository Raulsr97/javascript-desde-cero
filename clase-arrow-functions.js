const greeting = function(name) {
    console.log(`Hi, ${name}`);
}

// Arrow function with explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow function with implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, ${name} ${lastName}`


// Lexical bindig

const fictonalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunnction : (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}


fictonalCharacter.messageWithTraditionalFunction('Ponte a jalar cara de vergaaaaaa')
fictonalCharacter.messageWithArrowFunnction('With great power comes great reponsabiliy')