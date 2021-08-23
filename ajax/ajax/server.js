const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(8080, () => console.log('Executando...')) 