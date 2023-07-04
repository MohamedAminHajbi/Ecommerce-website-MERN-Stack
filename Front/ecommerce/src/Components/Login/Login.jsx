import React, { useState } from 'react'
import axios from "axios";

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8000/login',{email,password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" className='email' required value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" className='password' required value={password} onChange={e => setPassword(e.target.value)}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Login