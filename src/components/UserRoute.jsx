import React from 'react'
import Sidebar from './Sidebar'

const UserRoute = ({children}) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default UserRoute
