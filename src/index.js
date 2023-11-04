// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from "./db/db.js";

dotenv.config({
    path:'./env'
})

connectDB()







/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import { Express } from "express";
const app = express();

(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on('error',(error)=>{
        console.log('error', error);
        throw error;
       })

       app.listen(process.env.PORT,()=>{
        console.log('listening on port '+ process.env.PORT)
       })
    }catch(err){
        console.log("Error while creating", err);
        throw err;
    }
})()
*/