/* eslint-disable import/no-anonymous-default-export */

import './carrousel--card.css'
import React from 'react';

export default props => {


    return (<div className="Card">
        <div className="Img--Card">
            <img src={props.img} alt="bottle of wine"/>
        </div>
        <h3>{props.name}</h3>
        <h4 className="Value"> R$ {props.price}</h4>   
        <h4 className="Promo">R$ {Math.round(props.price * 0.80)}</h4>         
    </div>
    )
}