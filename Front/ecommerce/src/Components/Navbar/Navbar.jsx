import React from 'react'
import LogoutButton from './LogoutButton/LogoutButton'
import './Navbar.css'
import LoginButton from './LoginButton/LoginButton'
import Signup from './Signup/Signup'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <LoginButton/>
      <Signup/>
      <LogoutButton/>
    </div>
  )
}

export default Navbar