const express=require("express")
const { connection } = require("./src/Config/db")
const { LoginRouter } = require("./src/Routes/LoginRoute/Login.Route")
const { SignupRouter } = require("./src/Routes/SignupRoute/Signup.Route")
require("dotenv").config()




// .................................


const app=express()
const Port=process.env.PORT
app.use(express.json())

// --------------------------------------------

app.use("/login",LoginRouter)
app.use("/signup",SignupRouter)




app.listen(Port,async()=>{
try{
    await connection
    console.log("Server Connected To DataBase")
    console.log(`Server Started At http://localhost:${Port}`)
}catch(err){
console.log(`Some Problem With Server Error: ${err}`)
}
})