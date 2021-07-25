/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from "react-router-dom";
  
import './header.css'
export default ({black}) => {
    return (<div>
            <header className={black ? 'black' : 'header'}>
                <Link to="/" className="logo">
                    Veneza
                </Link>
                <div className="buttons">
                    <Link className="button" to="/Shop">Buy from us</Link>
                    <Link className="button" to="/Contact">Contact us</Link>
                    <Link className="button" to="/About">About us</Link>
                </div>
            </header>
    </div>
    )
}