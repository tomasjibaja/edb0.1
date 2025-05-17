import React from 'react'
import { BiSolidConfused } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>¡Uy! Nada por aquí...</h2>
      <img src="./Numi.png" alt="Ludmi" />
      <p>La página a la que intentas acceder no existe.</p>
      <NavLink to={'/'}>
        Click aquí para volver al INICIO
      </NavLink>
    </div>
  )
}

export default NotFound
