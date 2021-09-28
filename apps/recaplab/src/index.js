const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('SM says Hello World! - root')
})

app.get('/recaplab', (req, res) => {
  res.send('SM says Hello World! - recaplab')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})