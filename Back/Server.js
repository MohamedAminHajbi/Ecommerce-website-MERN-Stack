const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const port = 8000;
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"11629747",
    database:"chicx"
})

const transporter =nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'mohamedaminehajbi6@gmail.com',
        pass: 'qmsqyntspssuwlir',
    }
})

app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM user WHERE username = ? AND password = ?";
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if (err) return res.json("Login failed");
        if(data.length>0){
            return res.json("Login successfully");
        }
        else{
            return res.json("No record");
        }
        
    })
})

app.post('/send-email',(req,res)=>{
    const {subject, sender,mail} = req.body;
    console.log(sender);
    const mailOptions = {
        from: sender,
        to: 'mohamedaminehajbi6@gmail.com',
        subject: subject,
        text: mail,
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
            res.status(500).send("Error sending email");
        }
        else{
            console.log("Email sent" + info.response);
            res.send("Email sent");
        }
    })
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})