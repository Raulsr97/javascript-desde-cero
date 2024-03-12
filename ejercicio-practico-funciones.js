// Create Superhero objects
// function Superhero (name, color, superpower) {
//     this.name = name
//     this.color = color
//     this.superpower = superpower
//     this.isLeader = false

//     this.displayInfo = function () {
//         console.log(`Superhero information:
//         Name: ${this.name}
//         Color: ${this.color}
//         Superpower: ${this.superpower}
//         ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
//         `);
//     }

//     this.becomeLeader = function () {
//         this.isLeader = true
//         console.log(`${this.name} has become the leader of the superhero team`);
//     }
// }

// const spiderman = new Superhero('Spiderman', 'Red', 'throw webs')
// const batman = new Superhero('Batman', 'Black', 'mortal punches')
// const thor = new Superhero('Thor', 'white', 'God of Thunder')

// spiderman.displayInfo()
// batman.displayInfo()
// thor.displayInfo()

// batman.becomeLeader()

// spiderman.displayInfo()
// batman.displayInfo()
// thor.displayInfo()

// **********************************************************

function FootballPlayer (name, number, position) {
    this.name = name
    this.number = number
    this.position = position
    this.isGoat = false


    this.displayInfo = function () {
        console.log(`Player information:
        name: ${this.name}
        number: ${this.number}
        position: ${this.position}
        ${this.isGoat ? 'Goat: Yes' : 'Goat: NO'}
        `);
        
    }

    this.becomeGoat = function () {
        this.isGoat = true
        console.log(`${this.name} has become de best player on the history.`);
    }
}

const messi = new FootballPlayer ('Messi', 10, 'Delantero')
const ronaldo = new FootballPlayer ('Ronaldo', 7, 'Centro Delantero')
const never = new FootballPlayer ('Never', 1, 'Portero')

messi.displayInfo()
ronaldo.displayInfo()
never.displayInfo()

ronaldo.becomeGoat()

messi.displayInfo()
ronaldo.displayInfo()
never.displayInfo()


// *****************************************************************

function SoccerTeams (name, country, champions) {
    this.name = name
    this.country = country
    this.champions = champions
    this.isBestTeam = false

    this.displayInformation = function () {
        console.log(`
            Name: ${this.name}
            Country: ${this.country}
            Champions: ${this.champions}
            ${this.isBestTeam ? 'Best team: Yes' : 'Best team: No'} 
        `);
    }

    this.bestTeamEver = function () {
        this.isBestTeam = true
        console.log(`${this.name} is the best team in the history of soccer.`);
    }
}



const realMadrid = new SoccerTeams('Real Madrid', 'Spain', '14 Champions')
const liverpool = new SoccerTeams('Liverpool', 'England', '6 Champions')
const bayernMunich = new SoccerTeams('Bayern Munich', 'Germany', '6 Champions')

realMadrid.displayInformation()
liverpool.displayInformation()
bayernMunich.displayInformation()


realMadrid.bestTeamEver()

realMadrid.displayInformation()
liverpool.displayInformation()
bayernMunich.displayInformation()
