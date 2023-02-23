
import React from 'react'
import './Footer.css'
import logo_f from '../../../Assets/logo_f.png'
function Footer() {
  return (
    <footer>
        <div className="footer-cont">
            <img src={logo_f}   alt ="Logo footer"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer