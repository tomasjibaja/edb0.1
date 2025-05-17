import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Account from '../pages/Account'
import Meditations from '../pages/Meditations'
import Meditation from '../pages/Meditation'
import Logout from '../pages/Logout'
import NotFound from '../pages/NotFound'
import Practices from '../pages/Practices'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/cuenta' element={<Account />} />
      <Route path='/meditaciones' element={<Meditations />} />
      <Route path='/meditaciones/:id' element={<Meditation />} />
      <Route path='/practicas' element={<Practices />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default Router
