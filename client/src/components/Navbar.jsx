import "./navbar.css"
import {  NavLink } from "react-router-dom"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { SidebarData } from "./Sidebar";
import { AuthContext } from "../store/Auth";
export const Navbar=()=>{
    const [sidebar,setSidebar]=useState(false)
    const {user}=useContext(AuthContext)

    const showSidebar=()=>{
        setSidebar(!sidebar)
    }
    return(
        <>
        <IconContext.Provider value={{color:'#995aff'}}>
        <section id="home-top-section">
            <GiHamburgerMenu id="navbar-icon" onClick={showSidebar}/>
            <div ><img  id="home-logo"src="https://cdn.iconscout.com/icon/premium/png-512-thumb/ice-cream-1594954-1352394.png?f=webp&w=512" /></div>
            <p id="home-heading">Delicious!!</p>

        </section>   
        <nav className={sidebar?'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <NavLink to="#" className="menu-bars">
                    <AiOutlineCloseCircle  id="navbar-close"/>
   
                    </NavLink>
                </li>
                <div id="nav-contents">
                <div id="user_details_navbar">Welcome {user.username}</div>

                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <NavLink to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
                </div>
            </ul>
        </nav>     
        </IconContext.Provider>
        </>
    )
}