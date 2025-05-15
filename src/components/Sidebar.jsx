import React from 'react'
import { TbLayoutDashboard, TbCrystalBall } from "react-icons/tb";
import { MdOutlineOndemandVideo, MdAccountCircle, MdLogout } from "react-icons/md";
import { FaHatWizard, FaBook } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="logo">
        <TbCrystalBall id='logo-icon' />
      </div>
      <div className="icons">
        <NavLink to={'/account'}>
          <MdAccountCircle />
        </NavLink>
        <NavLink to={'/'}>
          <TbLayoutDashboard />
        </NavLink>
        <NavLink to={'/courses'}>
          <MdOutlineOndemandVideo />
        </NavLink>
        <NavLink to={'/search'}>
          <FaMagnifyingGlass />
        </NavLink>
        <NavLink to={'/manuals'}>
          <FaBook />
        </NavLink>
        <NavLink to={'/meditations'}>
          <BsMoonStars />
        </NavLink>
        <NavLink to={'/logout'}>
          <MdLogout />
        </NavLink>

      </div>

    </div>
  )
}

export default Sidebar
