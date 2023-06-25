import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../Assets/logo.png'
import SidebarButton from './SidebarButton'
import { Cardholder, ChatTeardropDots, ClockCounterClockwise, Compass, Gear, Heart, HouseSimple, ShoppingCartSimple, User } from '@phosphor-icons/react'

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav className='sidebar-container'>
        <div className="sidebar" style={{width: isOpen ? "200px" : "50px"}}>
            <span className="sidebar-header">
                {isOpen && <img src={Logo} alt="logo" />}
            </span>
            <div className={isOpen ? "side-buttons" : "side-buttons-opened"}>
                <SidebarButton linkText="Home" iconComponent={<HouseSimple size={24} color={"#5C5C5C"} />} opened={isOpen}/>
                <SidebarButton linkText="Explore" iconComponent={<Compass size={24} color={"#5C5C5C"} />} opened={isOpen}/>
                <SidebarButton linkText="Saved" iconComponent={<Heart size={24} color={"#5C5C5C"} />} opened={isOpen}/>
                <SidebarButton linkText="Paiement" iconComponent={<ShoppingCartSimple size={24} color={"#5C5C5C"} />} opened={isOpen}/>
                <SidebarButton linkText="Selling" iconComponent={<Cardholder size={24} color={"#5C5C5C"} />} opened={isOpen}/>
                <SidebarButton linkText="Profile" iconComponent={<User size={24} color={"#5C5C5C"} />} opened={isOpen}/>
                <SidebarButton linkText="Purchase history" iconComponent={<ClockCounterClockwise size={24} color={"#5C5C5C"} />} opened={isOpen}/>
                <SidebarButton linkText="Contact us" iconComponent={<ChatTeardropDots size={24} color={"#5C5C5C"} />} opened={isOpen}/>
                <SidebarButton linkText="Settings" iconComponent={<Gear size={24} color={"#5C5C5C"} />} opened={isOpen}/>
            </div>
        </div>
        <main>{children}</main>
    </div>
  )
}
export default Sidebar