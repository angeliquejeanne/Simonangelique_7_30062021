import React, {useRef, useState} from 'react'
import './AuthForm.css'

export default function SignUp() {
    return (
        <div className="global-modal">
            <div className="overlay"></div>
            <div className="container-modal">
                <form className="form-auth">
                    <h2>INSCRIPTION</h2>

                    <label htmlFor="mail">Votre mail</label>
                    <input type="mail" htmlFor="mail" required />

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" id="password" required />

                    <label htmlFor="confirm-password">Confirmez votre mot de passe</label>
                    <input type="password" id="confirm-password" required />

                    <button className="btn-sign-up">Inscription</button>
                </form>
                <button className="btn-close">x</button>
                <p className="bottom-help-txt">
                    Vous avez déjà un compte ?
                </p>
            </div>
        </div>
    )
}