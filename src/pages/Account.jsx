import React from 'react'
import './Account.css'
import ProfilePic from '../components/ProfilePic'

const Account = () => {
  return (
    <div className='account'>
      <div className="account--top">
        <div className='account--title card'>
          <h2>CUENTA</h2>
        </div>
        <ProfilePic />
      </div>
      <div className="account--personal card">
        <h2>Datos personales</h2>
      </div>
    </div>
  )
}

export default Account
