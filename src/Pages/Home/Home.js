import React from 'react'
import Login from '../../Components/AuthForm/Login'
import SignUp from '../../Components/AuthForm/SignUp'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

export default function Home() {
    return (
        <div className="global-container">
            <Navbar />

            <div className="content-container">
                <h1>GROUPOMANIA</h1>
                <p>Merci de vous connectez pour accéder aux services.</p>
            </div>
            {/* <Login />
            <SignUp /> */}
        </div>
    )
}
