const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')

const PORT = 3000 || env.PORT

const app = express()

app.get('/', (req, res) => {
    console.log('hello')
  return res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/secret', (req, res) => {
  return res.send('Your personal secret value is 8080')
})

https
  .createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
  }, app)
  .listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
  })
