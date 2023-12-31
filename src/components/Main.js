import React  from "react";
import classes from './Main.module.css'
import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div className={classes.main}>
            <div className={classes.links}>
                <Link to='/bakery' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691857622/BioBasket/Main/Bakery_Main_poxotj.avif"
                        className={classes.mainImage}
                        alt="Bakery Main"
                    ></img>
                    Bakery
                </Link>
                <Link to='/dairy' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691857785/BioBasket/Main/Dairy_Main_zn1sua.avif"
                        className={classes.mainImage}
                        alt="Dairy Main"
                    ></img>
                    Dairy
                </Link>
                <Link to='/dryfruitsnnuts' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1692281868/BioBasket/Main/Dryfruits_Main_bj3oxt.jpg"
                        className={classes.mainImage}
                        alt="DryFruits & Nuts Main"
                    ></img>
                    DryFruits & Nuts
                </Link>
                <Link to='/fruits' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691858283/BioBasket/Main/Fruits_dfnvss.avif"
                        className={classes.mainImage}
                        alt="Fruits Main"
                    ></img>
                    Fruits
                </Link>
                <Link to='/ricencereals' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1692281868/BioBasket/Main/Rice_Main_xjakyt.jpg"
                        className={classes.mainImage}
                        alt="Rice n Cereals Main"
                    ></img>
                    Rice & Cereals
                </Link>
                <Link to='/pickles' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1692200477/BioBasket/Main/Pickles_Main_rcxde3.jpg"
                        className={classes.mainImage}
                        alt="Pickles Main"
                    ></img>
                    Pickles
                </Link>
                <Link to='/snacks' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691859496/BioBasket/Main/Snacks_evfwvm.jpg"
                        className={classes.mainImage}
                        alt="Snacks Main"
                    ></img>
                    Snacks
                </Link>
                <Link to='/vegetables' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691858581/BioBasket/Main/Vegetables_dcvpzk.avif"
                        className={classes.mainImage}
                        alt="Vegetables Main"
                    ></img>
                    Vegetables
                </Link>
            </div>
        </div>
    )
}

export default Main