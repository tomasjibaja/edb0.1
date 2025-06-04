import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Account.css'

const Account = () => {

  const [ email, setEmail ] = useState(localStorage.getItem('email'));
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = () => {

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

            <a onClick={() => {}}>Cambiar contraseña</a>

            <label htmlFor="dob">Fecha de nacimiento</label>
            <input placeholder='DD/MM/AA' {...register('dob', { required: true })} />

            <button type='submit'>Guardar cambios</button>
          </form>
          <div className="account--profile-pic">
            <h3>Foto de perfil</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
