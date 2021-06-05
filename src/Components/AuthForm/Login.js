import React, {useRef, useState} from 'react'
import './AuthForm.css'
import { useSelector, useDispatch } from 'react-redux'

export default function Login() {

    const showModal = useSelector(state => state)

    return (
        <div className={showModal.showLogin ? "global-modal" : "hide-modal"}>
            <div className="overlay"></div>
            <div className="container-modal">
                <form className="form-auth">
                    <h2>CONNEXION</h2>

                    <label htmlFor="mail">Votre mail</label>
                    <input type="mail" htmlFor="mail" required />

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" id="password" required />

                    <button className="btn-login">Connexion</button>
                </form>
                <button className="btn-close">x</button>
                <p className="bottom-help-txt">
                    Besoin de créer un compte ?
                </p>
            </div>
        </div>
    )
}
