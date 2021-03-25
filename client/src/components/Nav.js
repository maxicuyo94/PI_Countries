import React from 'react'
import Logo from '../img/logo.png'
import { NavLink } from "react-router-dom";


export const Nav = (props) => {
    return (
        <div className="topnav">
            <NavLink className="Link" to='/home/1' >
                <img id="logo" src={Logo} width="17px" alt="Logo " />Home
            </NavLink>
            <NavLink className="Link" to='/add' >Add Activity</NavLink>
            <NavLink className="Link" to='/about' >About</NavLink>
        </div>
    )
}

