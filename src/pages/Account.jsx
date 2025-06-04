import React, { useState } from 'react'
import { toast, Slide } from 'react-toastify'
import { useForm } from 'react-hook-form';
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

  return (
    <div className='account'>
      <div className="account--top">
        <div className='account--title card'>
          <h2>CUENTA</h2>
        </div>
      </div>
      <div className="account--personal card">
        <h2>Datos personales</h2>
        <div className="account--personal-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="user">Usuario</label>
            <input placeholder='Nombre de usuario' {...register('user', { required: true })} />

            <label htmlFor="email">Correo electrónico</label>
            <input defaultValue={email} {...register('email', { required: true })} />


            <label htmlFor="dob">Fecha de nacimiento</label>
            <input placeholder='DD/MM/AA' {...register('dob', { required: true })} />

            <a onClick={() => {}}>Cambiar contraseña</a>

            <button type='submit'>Guardar cambios</button>
          </form>
          <div className="account--profile-pic">
            <h3>Foto de perfil</h3>
            <img src="./lu-bio.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
