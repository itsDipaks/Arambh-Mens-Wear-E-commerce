const {Router}=require("express")
const { Authentication } = require("../../Middlewares/Auth/Authentication.midw")


const DashboardRouter=Router()

DashboardRouter.get("/",Authentication,(req,res)=>{
    res.send("Welcome to Dashboard")
})

module.exports={DashboardRouter}