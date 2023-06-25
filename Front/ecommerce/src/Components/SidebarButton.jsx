import React from 'react'
import './SidebarButton.css'
import {Link} from 'react-router-dom'
import { HouseSimple  } from "@phosphor-icons/react";

const SidebarButton = () => {
  return (
    <div className='container'>
        <div className="icon">
            <HouseSimple size={24} color={"#5C5C5C"}/>
        </div>
        <Link className="btn">
            Home
        </Link>
    </div>
  )
}

export default SidebarButton