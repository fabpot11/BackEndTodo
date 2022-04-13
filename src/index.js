const express = require('express')
const app = express()
const cors = require('cors');
require("dotenv").config({ path: "../.env" });
const connect  = require('./configs/db')

app.use(express.json())
app.use(cors())


const todoPath = require('./controller/todo.ctrl')
app.use('/todo',todoPath)

const todoCart = require('./controller/parent.ctrl')
app.use('/parent',todoCart)

const login = require('./controller/login')
app.use('/login',login)

const singup = require('./controller/singup')
app.use('/singup',singup)


const Port = process.env.PORT || 1234
app.listen(Port,async()=>{
    try{
        await connect()
        console.log(`Listing at Port ${Port}`);
    }catch(e){
        console.log(e);
    }
})