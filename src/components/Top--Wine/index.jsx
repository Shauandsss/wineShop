import React from 'react'
import './Top--Wine.css'


export default () => {
    return (
        <div className="Main" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url("https://i.pinimg.com/originals/cb/d5/50/cbd550d4f42345e536a864def7faff15.jpg")`
            }}>
            <div className="Background--vertical">
                <div className="Background--horizontal">
                <img alt="Bottle of wine" className="Main--Image" src="https://i.pinimg.com/originals/a3/89/da/a389da305889146c139d48780d4549b5.png"/>
                <div className="Text">
                    <div className="Title">
                        Lallier Laborie
                    </div>
                    <div className="Content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At accusantium aut suscipit rem placeat odit perspiciatis earum? Ullam quae facilis illum. Culpa, porro magni! Libero architecto perferendis tempora velit ducimus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At accusantium aut suscipit rem placeat odit perspiciatis earum? Ullam quae facilis illum. Culpa, porro magni! Libero architecto perferendis tempora velit ducimus.
                    </div>
                </div>
               
                </div>
            </div>
        </div>
    )
}
