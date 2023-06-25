import React from 'react'
import './Sidebar.css'
import Logo from '../Assets/logo.png'
import SidebarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={Logo} alt="" />
            </div>
            <div className="side-buttons">
                <SidebarButton/>
                <SidebarButton/>
                <SidebarButton/>
                <SidebarButton/>
                <SidebarButton/>
            </div>
        </div>
        <div className="rest"></div>
    </div>
  )
}

export default Sidebar