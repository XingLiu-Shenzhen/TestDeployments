const express = require('express')
const app = express()
const data = require('./data/data.json')

app.port = 3000

app.get('/', (req, res) => {
  res.send('Hello from Ubuntu server 20.04!')
})

app.listen(app.port, () => {
  console.log(`Server listening on port ${app.port}!`)
})

module.exports = app;
