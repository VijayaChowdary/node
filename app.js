const http = require("http")
const express = require("express")
const app = express()

const middleware = ((req,res,next) => {
    if(10<20){
        next()
    }else{
        console.log("sorry you are not allowed")
    }
})
const port = 8080


app.get("/home", middleware, (req, res)=>{
     res.send("I am Home")
})

app.get("/about",(req, res)=>{
    res.send("I am about")
})
app.get("/user/:1",(req, res)=>{
    res.send("I am user 1")
})

app.listen(port, ()=>{
    console.log("Server Started and runnign successfully")
})