import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const UserRoute = ({children}) => {

  if (localStorage.getItem('login')) {
    return (
      <>
        <Sidebar />
        {children}
      </>
    )
  } else {
    return <Navigate to={'/login'} />
  }

}

export default UserRoute
