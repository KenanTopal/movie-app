import React from 'react'
import classes from './Login.module.css'
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className='page'>
      <div>
        <h1>Login</h1>
        <form>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label text-light'>Email</label>
            <input type="email" 
            className='form-control' 
            id='email' 
            autoComplete='off' 
            placeholder='Enter your email' 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='form-label text-light'>Password</label>
            <input type="password" 
            className='form-control' 
            id='password' 
            autoComplete='off' 
            placeholder='Enter your password' 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login