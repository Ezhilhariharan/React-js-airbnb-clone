import React from 'react';
import "./SearchResult.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({ src,location,title,description,star,price,total}) {
    return (
        <div className="SearchResult">
            <img src={src} alt="" />

            <FavoriteBorderIcon className="Heart" />

            <div className="SearchResult-info">

                <div className="SearchResult-infotop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="SearchResult-infobottom">

                            <div className="Stars">
                                 <StarIcon className="Staricon" />
                                 <p><strong>{ star }</strong></p>
                    </div>

                    <div className="SearchResult-Price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>

                </div>
                </div>
        </div>
    );
}

export default SearchResult;