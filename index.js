require('dotenv').config() 
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', function(req,res){
    res.send('hellow world')
})

app.get('*', function(req,res){
    res.status(404).send('<h1>404 Page GOT EM</h1>')
})

app.listen(process.env.PORT)

