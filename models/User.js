const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type : String,
        maxLength : 50
    },
    email:{
        type : String,
        trim : true, //tony lee@naver.com << 공백이 존재. 공백을 제거해주는걸 trim이 해주는 역할
        unique : 1
    },
    lastName:{
        type : String,
        maxLength:50
    },
    role:{
        type : Number,
        default: 0 
    },
    image:{
        type : String
    },
    token:{
        type : String
    },
    tokenExp:{
        type : Number
    }

})

const User = mongoose.model('User',userSchema)

//다른 곳에서도 사용할수 있도록
module.express = { User }