const express = require('express')
const app = express()


app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.post('/usuarios', (req,resp) => {
    console.log(req.body)
    resp.send('<h1>Usuario cadastrado</h1>')
})
app.post('/usuarios/:id', (req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Usuario alterado</h1>')
})

app.listen(5500)