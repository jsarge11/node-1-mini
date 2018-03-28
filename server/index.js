const express = require('express')
const bodyParser = require('body-parser')
const bc = require('./controllers/books_controller')

var app = express()

app.use(bodyParser.json());
app.use(express.static( './build'))

app.get('/api/books/', bc.read)
app.post('/api/books/', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

const port = 3000;

app.listen(port, ()=>console.log(`The Khala speaks to you on ${port}, James Raynor.`))