import React, { useState } from 'react'
import './Account.css'

const Account = () => {

  const [ email, setEmail ] = useState(localStorage.getItem('email'));

  return (
    <div className='account'>
      <div className="account--top">
        <div className='account--title card'>
          <h2>CUENTA</h2>
        </div>
      </div>
      <div className="account--personal card">
        <h2>Datos personales</h2>
        <h3>Correo electrónico:</h3>
        <span>{email}</span>
      </div>
    </div>
  )
}

export default Account
