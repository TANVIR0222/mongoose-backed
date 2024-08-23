// require('dotenv').config({path:  './config.env'});
import dotenv from "dotenv"

import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})




connectDB()







/*
import express from "express";
const app = express();
(async () => {
    try {
        mongoose.connect(`mongodb+srv://tanvir:simd6174@cluster0.hgdtm.mongodb.net`)
        app.on('error', (error) => {
            console.log('error' , error);
            throw err
        })

        app.listen(process.env.PORT , () =>{
            console.log(`Server is running on port 3000 ${process.env.PORT}`);
        })

    } catch (error) {
        console.error('Error : ' , error)
        throw err
    }
})()
*/