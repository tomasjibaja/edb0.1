import React, { useState } from 'react';
import { GiCrystalBall } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, Slide } from 'react-toastify';
import './LoginForm.css';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/

const LoginForm = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [ showPassword, setShowPassword ] = useState(false);

  const onSubmit = data => {
    toast(`🦄 Iniciaste sesión como ${data.email}`, {
      position: 'top-center',
      autoClose: 2000,
      closeButton: false,
      hideProgressBar: true,
      transition: Slide,
      className: 'toast-session'
    }
    );
    localStorage.setItem('login', true);
    localStorage.setItem('email', data.email);
    navigate('/');
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='login-form'>
      <img className='login-form--bkg' src="./login-bkg.png" alt="" />
      <GiCrystalBall />
      <h3>Inicia sesión</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input placeholder='Ingresar email' {...register('email', { required: true, pattern: emailRegex })} />
        <span className={errors.email ? 'visible' : 'invisible' }>Debes ingresar un email válido</span>
        <label htmlFor="password">
          Contraseña
          <span 
            className='login-form--password-toggle'
            onClick={() => {handleToggle()}}
          >
            {showPassword ? 'ocultar' : 'mostrar'}
          </span>
        </label>
        <input placeholder='Ingresar contraseña' type={showPassword ? 'text' : 'password'} {...register('password', { required: true, pattern: passwordRegex })} />
        <span className={errors.password ? 'visible' : 'invisible'} >Tu contraseña debe incluir una letra, un número y al menos 6 caracteres</span>
        <button type="submit">Continuar</button>
      </form>
      <span className="login--footer">
        Al ingresar declaras haber leído los términos y condiciones, así como las políticas de privacidad.
      </span>
    </div>
  )
}

export default LoginForm
