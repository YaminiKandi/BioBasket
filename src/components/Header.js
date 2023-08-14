import React, { useState } from "react";
import './Button.css';
import classes from './Header.module.css'
import Login from "./Login";
import logo from '../assets/Logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    const [showLogin, setShowLogin] = useState()
    const handleShowLogin = () => {
        setShowLogin(!showLogin)
    }
    return(
        <div>
            <div className={classes.header}>
                <Link to='/' className={classes.left}>
                    <img src={logo} alt="logo" className={classes.headerLogo}/>
                    <h3>BioBasket</h3>
                </Link>
                <div className={classes.right}>
                    <Link to='/wishlist' className="btn2"> Wishlist </Link>
                    <Link to='/cart' className="btn2"> Cart </Link>
                    <button className="btn5" onClick={handleShowLogin}>Login</button>
                </div>
            </div>
            {showLogin && (<Login onClose={handleShowLogin}/>)}
        </div>
    )
}

export default Header