import React, { useState } from 'react'
import classes from './Register.module.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  return (
  <div className={ `page ${classes.Register}` }>
      <div className={ classes.RegisterForm}> 
        <h1> Sign up</h1>
        <form>
          <div className='mb-3'>
            <label htmlFor="name" className='form-label text-light'> Name</label>
            <input type="text" className='form-control' id='email'
              autoComplete='off' placeholder='Enter your Name' value={ name }
              onChange={ (e)=> setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label text-light'> Email</label>
            <input type="email" className='form-control' id='email'
              autoComplete='off' placeholder='Enter your Email' value={ email }
              onChange={ (e)=> setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='form-label text-light'> Password</label>
            <input type="password" className='form-control' id='password'
              autoComplete='off' placeholder='Enter your Password' value={ password }
              onChange={ (e)=> setPassword(e.target.value)}
            />
          </div>
            
            <div className='d-grid'>
               <button type='button' className='btn btn-primary form-control mt-3'>Sign up </button> 
            </div>
        </form>
          <button type='button' className='btn btn-primary form-control mt-3'> Continue with Google</button>
        <p className='text-center text-light mt-3'>Have an account?
          <span className='text-warning' style={ { cursor: 'pointer' } } onClick={ () => navigate('/login') }>
            Login</span>
        </p>
      </div>
    </div>
  )
}

export default Register