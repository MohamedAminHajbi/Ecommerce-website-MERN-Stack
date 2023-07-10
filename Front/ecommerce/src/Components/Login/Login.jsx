import React, { useState } from 'react'
import axios from "axios";
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        })
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