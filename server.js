const path = require('path')
const https = require('https')
const express = require('express')

const PORT = 3000 || env.PORT

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})