import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('mogoose working properly');
}).catch((err)=>{
    console.log(err);
});


const app = express();

app.listen(process.env.PORT,(req,res)=>{
    console.log("app is running on port number 3000");
});

// mongodb+srv://durgadasdhoke:<password>@cluster0.odc8qqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// app.get('/',(req,res)=>{
//     res.json("Hello welcome");
// })