/* eslint-disable import/no-anonymous-default-export */

import './carrousel--card.css'
import React from 'react';

export default props => {


    return (<div className="Card">
        <img className="Img--Card" src={props.img} alt="bottle of wine"/>
        <h3>{props.name}</h3>
        <h4>R$ {props.price}</h4>        
    </div>
    )
}