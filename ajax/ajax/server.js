const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/legal', (req, res) => res.send('Fechou'))

app.listen(8080, () => console.log('Executando...'))