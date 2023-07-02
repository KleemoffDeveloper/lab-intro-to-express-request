const { application } = require('express')
const app = require('./app.js')
require('dotenv').config()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})