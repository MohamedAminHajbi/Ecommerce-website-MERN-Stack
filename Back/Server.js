const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const port = 8000;
app.use(express.json());
const transporter =nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'mohamedaminehajbi6@gmail.com',
        pass: 'qmsqyntspssuwlir',
    }
})

app.post('/send-email',(req,res)=>{
    const {subject, sender,mail} = req.body;
    const mailOptions = {
        from:sender,
        to:'mohamedaminehajbi6@gmail.com',
        subject: subject,
        text: mail
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