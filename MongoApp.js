// const express = require("express")
// const app = express();
// const dotEnv = require("dotenv")
// const {MongoClient} = require("mongodb");

// const PORT = process.env.PORT || 8080;

// dotEnv.config()

// MongoClient.connect(process.env.MONGO_URI)
// .then((client)=>{
//     console.log("connected succesfuly")

// })
// .catch((error)=> {
//     console.log("error",error)
// })
// app.listen(PORT, ()=> {
//     console.log(`Server started at ${PORT}`)
// })
const express = require("express")
const dotEnv = require('dotenv')
const mongoose = require("mongoose")
const employeRoutes = require("./routes/employeeRoute")
const app = express()
const PORT = process.env.PORT || 5000
const bodyparser = require("body-parser")

dotEnv.config()
app.use(bodyparser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("Connected Successfully")
})
.catch((error)=> {
    console.log("error")
})
app.use('./employee', employeRoutes)

app.listen(PORT, ()=> {
    console.log(`server started at ${PORT}`)
})