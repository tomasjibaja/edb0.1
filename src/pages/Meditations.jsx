import React from 'react'
import { NavLink } from 'react-router-dom'
import './Meditations.css'

const Meditations = () => {
  return (
    <div className='meditations'>
      <h2>MEDITACIONES</h2>
      <NavLink to={'/meditations/1'}>
        Meditación de la libertad
      </NavLink>
      <NavLink to={'/meditations/2'}>
        Meditación del enfoque
      </NavLink>
    </div>
  )
}

export default Meditations
