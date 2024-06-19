

const express = require('express')
const app = express()
const port = 3000
app.get('/hola', (req, res) => {
    res.send("Hello World")
})
const sumar = (req, res) => {
    sum1 = numero(req.query.sumando1)
    sum2 = numero(req.query.sumando2)
    var resultado = sumando1 + sumando2
    res.send(`sumar: ${sumando1} + ${sumando2} = ${resultado}`)
}
app.get('/suma', sumar)

const multiplicar = (req, res) => {
    mul1 = numero(req.query.multiplicando1)
    mul2 = numero(req.query.multiplicando2)
    var resultado = multiplicando1 * multiplicando2

    res.send(`multiplicar: ${multiplicando1} x ${multiplicando2} = ${resultado}`)
}
app.get('/multiplicacion', multiplicar)

app.get('/lista-de-1', (req, res) => {
    var a = Number(req.query.a)
    var lista = []
    for (i = 1; i <= a; i++) {
        lista.push(i)
    }
    res.send(`${lista}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


