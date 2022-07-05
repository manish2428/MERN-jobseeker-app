require('dotenv').config()
const express=require("express")
const app=express()
const helmet=require("helmet")()
const cors=require('cors')()




//database connection 
require('./Model/db')

//middle ware
app.use(cors)
app.use(helmet)
app.use(express.json())


//routes here
app.use('/signup',require("./Controller/signup/signup"))
app.use('/signin',require('./Controller/login/login'))

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(process.env.PORT,()=>{
    console.log(`Application Running on port ${process.env.PORT}`)
})