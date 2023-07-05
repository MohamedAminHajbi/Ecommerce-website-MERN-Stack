const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const port = 8000;
app.use(cors());
app.use(express.json());
const pool = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"11629747",
    database:"chicx"
})

app.use(bodyParser.json());

const transporter =nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'mohamedaminehajbi6@gmail.com',
        pass: 'qmsqyntspssuwlir',
    }
})

app.post('/register',(req,res)=>{
    const {username,email,password,age,country,city } = req.body;
    const sql = "INSERT INTO user(username,email,password,age,city,country) VALUES (?,?,?,?,?,?)"
    pool.query(sql,[username,email,password,age,country,city], (err,data) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Error inserting data.' });
          }
      
          console.log('New user added');
          return res.status(201).json({ message: 'User added successfully.' });
    })
})

app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM user WHERE username = ? AND password = ?";
    pool.query(sql, [req.body.email,req.body.password], (err, data) => {
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