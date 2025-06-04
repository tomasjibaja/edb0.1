import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import './Login.css'

const Login = () => {

  const [ imageZoom, setImageZoom ] = useState('');

  return (
    <div className='login'>
      <img src="./login.png" alt="login-img" className={`login--img ${imageZoom}`} />
      <div className="login--zoom-grid">
        <div onMouseEnter={() => setImageZoom('zoom-top-left')} onMouseLeave={() => setImageZoom('')}></div>
        <div onMouseEnter={() => setImageZoom('zoom-top-right')} onMouseLeave={() => setImageZoom('')}></div>
        <div onMouseEnter={() => setImageZoom('zoom-bottom-left')} onMouseLeave={() => setImageZoom('')}></div>
        <div onMouseEnter={() => setImageZoom('zoom-bottom-right')} onMouseLeave={() => setImageZoom('')}></div>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
