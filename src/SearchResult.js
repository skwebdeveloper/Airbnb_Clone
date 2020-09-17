import React from 'react'
import "./SearchResult.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({img, title, des, location, price, total, star}) {
    return (
        <div className="searchresult">
            <img src={img} />
            <FavoriteBorderIcon className="searchresult__heart"/>
            <div className="searchresult__info">
            <div className="searchresult__infotop">
                    <p><strong>{location}</strong></p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{des}</p>
            </div>
            <div className="searchresult__infobottom">
            <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
            </div>
             </div>
        </div>
    )
}

export default SearchResult
