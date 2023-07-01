const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const port = 8000;

app.post('/send-email',(req,res)=>{
    const {subject, to,mail} = req.body;
    
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})