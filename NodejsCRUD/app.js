const express = require('express')
const mongoose=require('mongoose')
const url ='mongodb://localhost/StudentDb'

const app =express()

mongoose.connect(url,{useNewUrlParser:true})
const connect=mongoose.connection

//to check if server is connected or not
connect.on('open',function(){
    console.log('connected...')
})

app.use(express.json())

const studentRouter=require('./routers/student')
app.use('/student',studentRouter)

//shows that server is starting
app.listen(7000, ()=>{
    console.log('server started.....')
    
})