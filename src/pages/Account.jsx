import React, { useState } from 'react'
import { toast, Slide } from 'react-toastify'
import { useForm } from 'react-hook-form';
import { FaCamera } from "react-icons/fa";
import { isMobile } from 'react-device-detector';
import './Account.css'

const Account = () => {

  const [ email, setEmail ] = useState(localStorage.getItem('email'));
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = () => {
    toast('Cambios guardados correctamente ✅', {
      position: 'bottom-center',
      autoClose: 2000,
      closeButton: false,
      hideProgressBar: true,
      transition: Slide,
      className: 'toast-session'
    })
  }

  const handlePicChange = () => {
    toast('Has cambiado tu foto de perfil', {
      position: 'bottom-center',
      autoClose: 2000,
      closeButton: false,
      hideProgressBar: true,
      transition: Slide,
      className: 'toast-session'
    })    
  }

  const handlePasswordChange = () => {
    toast('Has cambiado tu contraseña', {
      position: 'bottom-center',
      autoClose: 2000,
      closeButton: false,
      hideProgressBar: true,
      transition: Slide,
      className: 'toast-session'
    })    
  }

  return (
    <div className='account'>
      <div className="account--top">
        <div className='account--title card'>
          <h2>CUENTA</h2>
        </div>
      </div>
      <div className="account--personal card">
        <div className="account--personal-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="user">Usuario</label>
            <input placeholder='Nombre de usuario' {...register('user', { required: true })} />

            <label htmlFor="email">Correo electrónico</label>
            <input defaultValue={email} {...register('email', { required: true })} />


            <label htmlFor="dob">Fecha de nacimiento</label>
            <input placeholder='DD/MM/AA' {...register('dob', { required: true })} />

            <a onClick={() => handlePasswordChange()}>Cambiar contraseña</a>

            <button type='submit'>Guardar cambios</button>
          </form>
          <div className="account--profile-pic">
            <h3>Foto de perfil</h3>
            <div 
              className="account--pic-wrapper" 
              onClick={() => handlePicChange()}
            >
              <img src="./lu-bio.jpeg" alt="" />
              <FaCamera id='account--camera' />
            </div>
            {
              isMobile && 
              <button 
                id='profile-pic-change'
                onClick={() => handlePicChange()}
              >
                Cambiar foto
              </button>
            }
            {!isMobile && <p className='account--img-specs'>
              Mínimo recomendado: 500x500px <br/>
              Máximo recomendado: 900x900px <br/>
              PNG o JPG
            </p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
