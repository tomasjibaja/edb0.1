import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Account from '../pages/Account'
import Courses from '../pages/Courses'
import Manuals from '../pages/Manuals'
import Meditations from '../pages/Meditations'
import Search from '../pages/Search'
import Logout from '../pages/Logout'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/account' element={<Account />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/manuals' element={<Manuals />} />
      <Route path='/meditations' element={<Meditations />} />
      <Route path='/search' element={<Search />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  )
}

export default Router
