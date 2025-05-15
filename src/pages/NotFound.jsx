import React from 'react'
import { BiSolidConfused } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Error 404 - Recurso no encontrado</h2>
      <BiSolidConfused className='not-found-icon' />
      <p>La página a la que intentas acceder no existe.</p>
      <NavLink to={'/'}>
        Volver al inicio
      </NavLink>
    </div>
  )
}

export default NotFound
