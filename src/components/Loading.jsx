import React from 'react'
import { GiCrystalBall } from "react-icons/gi";
import { IoHandLeft, IoHandRight } from "react-icons/io5";


import './Loading.css'

const Loading = () => {
  return (
    <div className='loading'>
      <div className="loading--crystal-and-hands">
        <div className="loading--ball-glow"></div>
        <GiCrystalBall className='loading--ball' />
        <IoHandLeft className='loading--lh' />
        <IoHandRight className='loading--rh' />
      </div>
      <span className='loading--text'>MANIFESTANDO</span>
    </div>
  )
}

export default Loading
