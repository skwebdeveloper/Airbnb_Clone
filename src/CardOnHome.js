import React from 'react'
import "./cardonhome.css"


function CardOnHome({src, title, des, price}) {
    return (
        <div className="cardonhome">
            <img src={src} className="image" />
             <div className="cardonehome__info">
             <h2>{title}</h2>
             </div>
        </div>
    )
}

export default CardOnHome
