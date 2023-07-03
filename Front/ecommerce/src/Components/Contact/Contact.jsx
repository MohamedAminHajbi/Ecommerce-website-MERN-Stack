import React, { useState } from 'react'
import './Contact.css'
import contact from "../../Assets/contact.png"
import Loader from '../Loader/Loader';
import SuccessSend from '../SuccessSend/SuccessSend';

const Contact = () => {
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [text,setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = async (event) =>{
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('subject',subject);
    formData.append('sender',email);
    formData.append('mail',text);
    const jsonFormData = {};
    formData.forEach((value, key) => {
      jsonFormData[key] = value;
    });
    try{
      const response = await fetch("http://localhost:8000/send-email",{
        method :'Post',
        body: JSON.stringify(jsonFormData),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(response.ok){
        console.log('Email sent');
        console.log(formData);
      }
      else{
        console.log('Failed to send mail');
      }
    }
    catch(error){
      console.error(error);
    }
    setSent(true);
  }
  return (
    <div className='contact-body'>
      {loading && !sent ? (
        <Loader />
      ): sent ? (
        <SuccessSend/>
      ) : (
        <div className="contact-container">
        <div className="contact-form">
          <form className='contact-formulaire' onSubmit={handleSubmit}>
            <input className='form-input' type="email" required name='email' placeholder='Your email' value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
            <input className='form-input' type="text" required name='subject' placeholder='Subject' value={subject} onChange={(e)=>{setSubject(e.target.value);}}/>
            <textarea className='form-input' required name="text" id="text" placeholder='Write your email here' cols="50" rows="13" value={text} onChange={(e)=>{setText(e.target.value);}}></textarea>
            <button className="cta" >
                <span className="hover-underline-animation"> Send </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>
          </form>
        </div>
        <div className="contact-header">
          <img src={contact} alt="contact"/>
          <span>Contact us</span>
          <div className="social-links">
              <div id="twitter" className="social-btn flex-center">
                <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg><span>@example</span>
              </div>
            
              <div id="facebook" className="social-btn flex-center">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path></svg><span>in/example</span>
              </div>

              <div id="github" className="social-btn flex-center">
                <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg><span>example</span>
              </div>
          </div>
        </div>
      </div>
      )}
      
      
    </div>
  )
}

export default Contact