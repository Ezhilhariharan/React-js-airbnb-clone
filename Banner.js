import React, { useState }from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import Search from './Search.js';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [ ShowSearch, setShowSearch ] = useState(false);
    return (
        <div className="Banner">
            <div className="Banner-search">
                {ShowSearch && <Search/>}
                <Button variant="outlined" className="Banner-searchbutton"
                    onClick={() => setShowSearch(!ShowSearch)}
                >{ShowSearch ? "Hide" : "Search dates"} </Button>
            </div>
            <div className="Banner-info">
                <h1>Get out and stretch your imagination</h1>
                <h5>plan different kind of gateway to uncover the hidden gemd near you</h5>
                <Button variant="outlined" onClick={() => history.push("/Search") }>Explore near By </Button>
            </div>
        </div>
    );
}

export default Banner;