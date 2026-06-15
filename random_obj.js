let spaceship = {
    crew: {
        captain: {
            name: 'Lil'

        },
        'c o': {
            name: 'Dan humphrey'

        },
        medic: {
            name: 'Rufus'

        },
        translator: {
            name: 'Blair waldorf'

        }
    }
}

for(let crewGuy in spaceship.crew){
    console.log(`${crewGuy}: ${spaceship.crew[crewGuy].name}`)
}
