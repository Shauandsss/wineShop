import './carrousel.css'

import CarrouselCard from '../carrousel--card'
import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default ({title}) => {

    
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + 220;
        if(x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2)
        let listW = 17*220;
        if((window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    return (
        <div className="movieRow">
        
        <h2>{title}</h2>
        <div className="Line"></div>
        <div className="movieRow--left" onClick={handleLeftArrow}>
            <NavigateBeforeIcon style={{fontSize:50}}/>
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
            <NavigateNextIcon style={{fontSize:50}}/>
        </div>
        <div className="movieRow--listarea">    
            <div className="movieRow--list" style={{
                marginLeft :scrollX,
                width:17*220
            }}>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Rosé Pinot Noir Santa Augusta" img="https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png" price={299.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png" price={349.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Tinto Pinot Noir MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png" price={129.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Branco Sauvignon Blanc SANTA AUGUSTA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png" price={99.99}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Rosé Pinot Noir Santa Augusta" img="https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png" price={299.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png" price={349.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Tinto Pinot Noir MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png" price={129.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Branco Sauvignon Blanc SANTA AUGUSTA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png" price={99.99}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Rosé Pinot Noir Santa Augusta" img="https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png" price={299.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png" price={349.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Tinto Pinot Noir MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png" price={129.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Branco Sauvignon Blanc SANTA AUGUSTA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png" price={99.99}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Branco Sauvignon Blanc SANTA AUGUSTA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png" price={99.99}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Rosé Pinot Noir Santa Augusta" img="https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png" price={299.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png" price={349.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Tinto Pinot Noir MAESTRIA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png" price={129.90}/>
                </div>
                <div id="movieRow--item" className="movieRow--item">
                    <CarrouselCard name="Vinho Branco Sauvignon Blanc SANTA AUGUSTA" img="https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png" price={99.99}/>
                </div>
            </div>
        </div>
    </div>
    
            
    )
}