import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
 <Link to ="/">
            <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="airbnb" />
</Link>
        <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
       <Link to="/login">
        <AccountCircleIcon 
         
        
        style={{ fontSize:"40px" }}/>
               </Link>
        </div>
        </div>
    )
}

export default Header;
