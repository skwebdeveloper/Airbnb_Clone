import React from 'react'
import "./BigCard.css"

function BigCard({src, title}) {
    return (
        <div className="card">
            <img src={src} className="image" />
             <div className="card__info">
             <h2>{title}</h2>
             </div>
        </div>
    )
}

export default BigCard;
