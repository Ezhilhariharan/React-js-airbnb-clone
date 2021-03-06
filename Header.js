import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                className="header-img"
                Src="data:image/png;base64,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"
                alt=""
            />
            </Link>
            <div className="header-center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header-right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar/>
            </div>
        </div>
       
    );
}

export default Header;
