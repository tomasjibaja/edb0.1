import React from 'react'
import MoonPhases from '../components/MoonPhases'
import './Dashboard.css'

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <div className="dashboard--top">
        <div className='dashboard--title card'>
          <h2>INICIO</h2>
        </div>
        <MoonPhases />
      </div>
      <div className="dashboard--content card">
        <h2>Novedades</h2>
      </div>
    </div>
  )
}

export default Dashboard
