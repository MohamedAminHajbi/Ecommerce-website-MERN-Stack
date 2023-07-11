import React, { useRef, useState } from 'react'
import './Register.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuth } from '../../Contexts/AuthContext';

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [age , setAge] = useState();
  const [country , setCountry] = useState("");
  const [password , setPassword] = useState("");
  const [city , setCity] = useState("");
  const handleSubmit = async (event) =>{
    event.preventDefault();
    signup(emailRef.current.value,passwordRef.current.value);
    const ageNumber = parseInt(age, 10);
    const formData = new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("age",ageNumber);
    formData.append("country",country);
    formData.append("city",city);
    
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    const dataJson = JSON.stringify(data);
    try{
      const response = await fetch("http://localhost:8000/register",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: dataJson
      });
      if(response.ok){
        console.log("Registred");
        setAge(0);
        setCity("");
        setCountry("");
        setEmail("");
        setPassword("");
        setUsername("");
      }
      else{
        console.log(dataJson);
        console.log("Failed");
      }
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" className='username' required placeholder='Username'value={username} onChange={e=>{setUsername(e.target.value)}}/>
        <input type="email" className='email' required placeholder='Email' value={email} ref={emailRef} onChange={e=>{setEmail(e.target.value)}}/>
        <input type="number" className='age' required placeholder='Age' value={age} onChange={e=>{setAge(e.target.value)}}/>
        <input type="text" className='country' required placeholder='Country' value={country} onChange={e=>{setCountry(e.target.value)}}/>
        <input type="text" className='City' required placeholder='City' value={city} onChange={e=>{setCity(e.target.value)}}/>
        <input type="password" className='password' required placeholder='Password' value={password} ref={passwordRef} onChange={e=>{setPassword(e.target.value)}}/>
        <button>Submit</button>      
      </form>
    </div>
  )
}

export default Register