/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import WineComFundo from './WineComFundo.jpg'
import WineSemFundo from './WineSemFundo.png'
import WineBarellComFundo from './BarrilComFundo.jpg'
import WineBarellSemFundo from './BarrilSemFundo.png'
import './Home--Top.css'

export default () => {
    return <div className="container">
        <div className="vertical--shadow">
            <div className="left">
            <h1 className="left--text">Come and see how we made a masterpiece in each bottle</h1>
            <img className="img--right--Front" src={WineBarellSemFundo} alt="bottle of wine"/>
                <img className="img--left--Back" src={WineBarellComFundo} alt="bottle of wine"/>
            </div>
            <div className="right">
                <h1 className="right--text">Buy the best wine from the south of the World</h1>
                <img className="img--right--Front" src={WineSemFundo} alt="bottle of wine"/>
                <img className="img--right--Back" src={WineComFundo} alt="bottle of wine"/>
            </div>
        </div>
    </div>
}