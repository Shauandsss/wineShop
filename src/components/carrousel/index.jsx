/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './carrousel.css'

import CarrouselCard from '../carrousel--card'

export default () => {
    return (<div className="Carrousel">
        <CarrouselCard name="rosé" img="https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png" price={299.90}/>
        <CarrouselCard name="Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png" price={349.90}/>
        <CarrouselCard name="Vinho Tinto Pinot Noir MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png" price={129.90}/>
        <CarrouselCard name="Vinho Branco Sauvignon Blanc SANTA AUGUSTA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png" price={99.99}/>
    </div>
    )
}