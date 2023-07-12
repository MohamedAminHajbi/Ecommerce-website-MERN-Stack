import React from 'react'
import LogoutButton from './LogoutButton/LogoutButton'
import './Navbar.css'
import LoginButton from './LoginButton/LoginButton'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <LoginButton/>
      <LogoutButton/>
    </div>
  )
}

export default Navbar