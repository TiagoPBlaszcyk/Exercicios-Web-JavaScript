const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const multer = require('multer')

const storage = multer.diskStorage({
})

app.listen(8080, () => console.log('Executando...')) 