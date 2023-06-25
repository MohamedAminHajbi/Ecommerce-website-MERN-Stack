import React from 'react'
import './SidebarButton.css'
import {Link} from 'react-router-dom'

const SidebarButton = ({ linkText, iconComponent, opened }) => {
  return (
    <Link className={opened ? "container" : "container-opened"}>
        <div className={opened ? "icon" : "icon-opened"}>
          {iconComponent}
        </div>
        <div className={opened ? "btn" : "btn-opened"} >
            {linkText}
        </div>
    </Link>
  )
}

export default SidebarButton