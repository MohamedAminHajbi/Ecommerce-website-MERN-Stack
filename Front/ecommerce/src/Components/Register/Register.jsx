import React, { useState } from 'react'
import './Register.css'

const Register = () => {
  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [age , setAge] = useState(0);
  const [country , setCountry] = useState("");
  const [password , setPassword] = useState("");
  const [city , setCity] = useState("");
  const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("age",age);
    formData.append("country",country);
    formData.append("city",city);
    formData.append("password",username);
  }

  return (
    <div className='register-container'>
      <form>
        <input type="text" className='username' required placeholder='Username'value={username} onChange={e=>{setUsername(e.target.value)}}/>
        <input type="email" className='email' required placeholder='Email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
        <input type="number" className='age' required placeholder='Age' value={age} onChange={e=>{setAge(e.target.value)}}/>
        <input type="text" className='country' required placeholder='Country' value={country} onChange={e=>{setCountry(e.target.value)}}/>
        <input type="text" className='City' required placeholder='City' value={city} onChange={e=>{setCity(e.target.value)}}/>
        <input type="password" className='password' required placeholder='Password' value={password} onChange={e=>{setPassword(e.target.value)}}/>
      </form>
    </div>
  )
}

export default Register