import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './Register.module.css'


const Register = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState();
  const [name,setName] = useState();
  const [password,setPassword] = useState();
  
  return (
    <div className={`${classes.Register} page`}>
      <div className={`${classes.RegisterForm}`}>
        <h1>Sign Up</h1>
        <form>
          <div className='mb-3'>
            <label htmlFor="name" className='form-label text-light'>Name</label>
            <input type="name"
              className='form-control'
              id='name'
              autoComplete='off'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label text-light'>Email</label>
            <input type="email"
              className='form-control'
              id='email'
              autoComplete='off'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className='d-grid'>
            <button type='button' className='btn btn-primary form-control mt-3'>Sign Up</button>
          </div>

        </form>

        <button type='button' className='btn btn-primary form-control mt-3'> Continue with Google</button>
        <p className='text-center text-light mt-3'>
          Have an account? <span className='text-warning' style={{ cursor: 'pointer' }} onClick={()=>navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  )
}

export default Register