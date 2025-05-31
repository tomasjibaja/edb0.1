import React from 'react'
import LoginForm from '../components/LoginForm'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <img src="./login.png" alt="login-img" className="login--img" />
      <LoginForm />
    </div>
  )
}

export default Login
