import React from 'react'
import './Navbar.css'
import logoleftfont from '../../Assets/images/logo-monochrome-white.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <img className="logo" alt="logo" src={logoleftfont} />
            </div>
            <div className="right">
                <button>Login</button>
                <button>SignUp</button>
            </div>
        </nav>
    )
}
