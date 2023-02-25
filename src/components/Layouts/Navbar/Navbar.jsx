import React from 'react'
import './Navbar.css'
import logoh from '../../../Assets/logo_h.png'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to='/'>
         <div className='header_logo' >
            <img src={logoh} alt='Logo header kasa'/>
         </div>
      </NavLink>
      <NavLink to= '/' className="accueil">
            Accueil
      </NavLink>
      <NavLink to= '/About' className='about'>
            About
      </NavLink>
    </nav>
  )
}

export default Navbar