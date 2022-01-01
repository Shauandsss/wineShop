import './carrousel--card.css'
import React from 'react';

export default props => {


    return (<div className="Card">
        <div className="Img--Card">
            <div className="square"/>
            <img src={props.img} alt="bottle of wine"/>
        </div>
        <h3>{props.name}</h3>
        <h4 className="Value"> R$ {props.price}</h4>   
        <div className="Promo">
            <h4 className="Promo--Value">R$ {Math.round(props.price * 0.80)}</h4>      
        </div>   
    </div>
    )
}