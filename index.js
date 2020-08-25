const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const config = require('./config/key');

const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());
 
//몽구스를 이용하여 디비와 연결 
const mongoose = require('mongoose')


//몽고DB 연결 
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
.catch(err => console.log("err"))



app.get('/', ( req, res ) => res.send('hello world~'))

app.post('/register',(req, res) => {
    //회원 가입 시 필요한 정보를 client(크롬)에서 가져오면 
    //그것들을 데이터 베이스에 넣어주는 것
 
    /*
    req.body =>
    {
        id : "hello"
        pass : 
    }
    */
    const user = new User(req.body)

    //정보들을 저장이 된것
    user.save((err, userInfo) =>{
        if(err) return res.json(hello)
        return res.status(200).json({
            success : true
        })
    })
})

app.listen(port, () => console.log('example app listening on port '+port))