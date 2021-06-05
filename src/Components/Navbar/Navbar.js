import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <p className="logo">
                    GROUPOMANIA
                </p>
            </div>
            <div className="right">
                <button>Login</button>
                <button>SignUp</button>
            </div>
        </nav>
    )
}
