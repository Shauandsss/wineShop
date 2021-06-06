/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './header.css'
export default ({black}) => {
    return <div>
        <header className={black ? 'black' : 'header'}>
            <div className="logo">
                Veneza
            </div>
            <div className="buttons">
                <div>Buy from us</div>
                <div>Contact us</div>
                <div>About us</div>
            </div>
        </header>
    </div>
}