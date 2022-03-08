const express = require('express')
const app = express()

const htmlDir = `${__dirname}/views/`;

app.get('/',(req,res,next)=>{
    res.sendFile(htmlDir + 'main.html')
})

app.get('/login',(req,res,next)=>{
    res.sendFile(htmlDir + 'login.html')
})

app.get('/register',(req,res,next)=>{
    res.sendFile(htmlDir + 'register.html')
})

app.listen(8080,()=>{
    console.log('server running at localhost:8080/')
})
