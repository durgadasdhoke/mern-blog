import express from 'express';

const app = express();

app.listen(3000,(req,res)=>{
    console.log("app is running on port number 3000");
});

// app.get('/',(req,res)=>{
//     res.json("Hello welcome");
// })