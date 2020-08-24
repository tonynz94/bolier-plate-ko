const express = require('express')
const app = express()
const port = 5000

//몽구스를 이용하여 디비와 연결 
const mongoose = require('mongoose')

//d
mongoose.connect('mongodb+srv://tonylee:abcd1234@bolierplate.xhyq6.mongodb.net/bolierplate?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
.catch(err => console.log("err"))

app.get('/', ( req, res ) => res.send('hello world~안녕하세요~'))

app.listen(port, () => console.log('example app listening on port '+port))