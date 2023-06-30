const express = require('express')
const app = express()

// Apparently I there's this policy that says you can't
// fetch data from the same website so I had to install
// a package called "CORS" which allowed me to bypass
// this or something...
const cors = require('cors')
app.use(cors())


/*
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to New Project Name Generator!</h1><br/><a href="/bugs">Check out this bug thing lol</a><br/><a href="/pokemon">Check out the pokemon app!</a>`)
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    res.send(`<h1>Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!</h1>`)
})

app.get('/bugs', (req, res) => {
    res.send(`99 little bugs in the code<br/><a href="/bugs/101">pull one down, patch it around</a>`)
})

app.get('/bugs/:numberOfBugs', (req, res) => {
    let option = req.params.numberOfBugs > 200 ? `<a href="/">Start Over?</a>` : `<a href="/bugs/${Number(req.params.numberOfBugs) + 2}">pull one down, patch it around</a>`
    res.send(`${req.params.numberOfBugs} little bugs in the code<br/>${option}`)
})
*/

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

const pokemon = require('./models/pokemon.json')

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.get('/pokemon/index', (req, res) => {
    res.send(`<h1>Add the index to the searchbar to get a specific pokemon.</h1>`)
})

app.get('/pokemon/index/:indexOfArray', (req, res) => {
    res.send(pokemon[req.params.indexOfArray] ? pokemon[req.params.indexOfArray] : `sorry, no pokemon found at /pokemon[${req.params.indexOfArray}]`)
})

app.get('/pokemon/search', (req, res) => {
    for(const poke of pokemon){
        if(poke.name.toLowerCase() === req.query.name.toLowerCase()){
            res.send(poke)
            return;
        }
    }

    res.send(`<h1>Pokemon not found!</h1>`)
})

module.exports = app