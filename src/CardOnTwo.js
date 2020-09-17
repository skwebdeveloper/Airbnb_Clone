import React from 'react'
import "./CardOnTwo.css"


function CardOnTwo({src, title, des, price}) {
    return (
        <div className="cardontwo">
            <img src={src} className="image" />
             <div className="cardontwo__info">
             <h2>{title}</h2>
             </div>
        </div>
    )
}

export default CardOnTwo
