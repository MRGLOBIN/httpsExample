const fs = require('fs')
const path = require('path')
const https = require('https')
const helmet = require('helmet')
const express = require('express')

require('dotenv').config()

const PORT = 3000 || env.PORT

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
}

const app = express()

app.use(helmet())

app.get('/', (req, res) => {
  console.log('hello')
  return res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/auth/google', (req, res) => {})

app.get('/auth/google/callback', (req, res) => {})

app.get('/auth/logout', (req, res) => {})

app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 8080')
})

https
  .createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
  })

function checkLoggedIn(req, res, next) {
  const isLogged = true

  if (!isLogged) {
    return res.status(401).json({ err: 'you must login first' })
  }

  next()
}
