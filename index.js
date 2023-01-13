const express = require('express')
const app = express()

let dateNow = new Date()
let year = dateNow.getFullYear()
let day = dateNow.getDate()
let monthYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

app.get('/what-date', function (req, res) {
    res.send(`Fecha Actual: ${day} de ${monthYear[dateNow.getMonth()]} del ${year}`)
})

app.get('/what-time', function (req, res) {
    res.send(`Horario de Hoy: ${dateNow.toLocaleTimeString()}`)
})

app.get('/what-date-time', function (req, res) {
    res.send(`Fecha y Horario Actual: ${day} de ${monthYear[dateNow.getMonth()]} del ${year} - ${dateNow.toLocaleTimeString()}`)
})

app.listen(3000)

