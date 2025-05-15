import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Account from '../pages/Account'
import Courses from '../pages/Courses'
import Manuals from '../pages/Manuals'
import Meditations from '../pages/Meditations'
import Meditation from '../pages/Meditation'
import Search from '../pages/Search'
import Logout from '../pages/Logout'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/account' element={<Account />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/manuals' element={<Manuals />} />
      <Route path='/meditations' element={<Meditations />} />
      <Route path='/meditations/:id' element={<Meditation />} />
      <Route path='/search' element={<Search />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default Router
