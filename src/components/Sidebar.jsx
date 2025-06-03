import { useState } from 'react';
import { toast, Slide } from 'react-toastify';
import { TbLayoutDashboard,  } from "react-icons/tb";
import { GiMeditation } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {

  const [accountMenu, setAccountMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast('👋 Cerraste sesión, hasta pronto!', {
      position: 'top-center',
      autoClose: 2000,
      closeButton: false,
      hideProgressBar: true,
      transition: Slide,
      className: 'toast-session'
    });
    setAccountMenu(!accountMenu);
    localStorage.clear('login');
    navigate('/login');
  }

  return (
    <div className='sidebar'>
      <div className="avatar">
        <img src="./lu-bio.jpeg" alt="" onClick={() => setAccountMenu(!accountMenu)}/>
        {accountMenu && <div className="account-menu" onMouseLeave={() => setAccountMenu(!accountMenu)}>
          <Link to={'/cuenta'} onClick={() => setAccountMenu(!accountMenu)}>Tu cuenta</Link>
          <a onClick={() => handleLogout()}>Cerrar sesión</a>
        </div>}
      </div>
      <div className="icons">
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active-navlink' : 'inactive-navlink')}>
          <TbLayoutDashboard />
        </NavLink>
        <NavLink to={'/meditaciones'} className={({ isActive }) => (isActive ? 'active-navlink' : 'inactive-navlink')}>
          <GiMeditation />
        </NavLink>
        <NavLink to={'/practicas'} className={({ isActive }) => (isActive ? 'active-navlink' : 'inactive-navlink')}>
          <BsMoonStars />
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
