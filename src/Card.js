import React from 'react'
import "./card.css"

function Card({src, title, des, price}) {
    return (
        <div className="card">
            <img src={src} className="image" />
             <div className="card__info">
             <h2>{title}</h2>
             <h4>{des}</h4>
             <h3>{price}</h3>
             </div>
        </div>
    )
}

export default Card;
