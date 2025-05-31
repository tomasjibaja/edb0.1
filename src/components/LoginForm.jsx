import React from 'react'
import { GiCrystalBall } from "react-icons/gi";
import { Link } from 'react-router-dom'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='login-form'>
      <img className='login-form--bkg' src="./login-bkg.png" alt="" />
      <GiCrystalBall />
      <h3>Inicia sesión</h3>
      <form action="/">
        <input placeholder='Ingresar usuario o email' type="text" />
        <input placeholder='Ingresar contraseña' type="password" />
        <button>Continuar</button>
      </form>
      <span className="login--footer">
        Al ingresar declaras haber leído los términos y condiciones, así como las políticas de privacidad.
      </span>
    </div>
  )
}

export default LoginForm
