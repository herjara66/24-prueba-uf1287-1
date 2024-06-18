const express = require('express')
const app = express()
const port = 3000

app.get("/hola", (req, res) => {
  res.send('HOLA MUNDO!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
