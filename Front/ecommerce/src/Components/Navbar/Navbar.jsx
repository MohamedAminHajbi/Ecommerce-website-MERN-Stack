import React from 'react'
import LogoutButton from './LogoutButton/LogoutButton'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link  className='nav-btn'>Login</Link>
      <Link className='nav-btn'>Sign up</Link>
      <LogoutButton/>
    </div>
  )
}

export default Navbar