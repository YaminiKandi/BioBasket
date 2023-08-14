import React  from "react";
import classes from './Main.module.css'
import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div className={classes.main}>
            <div className={classes.links}>
                <Link to='/bakery' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691857622/BioBasket/Bakery_Main_poxotj.avif"
                        className={classes.mainImage}
                    ></img>
                    Bakery
                </Link>
                <Link to='/dairy' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691857785/BioBasket/Dairy_Main_zn1sua.avif"
                        className={classes.mainImage}
                    ></img>
                    Dairy
                </Link>
                <Link to='/fruits' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691858283/BioBasket/Main/Fruits_dfnvss.avif"
                        className={classes.mainImage}
                    ></img>
                    Fruits
                </Link>
                <Link to='/snacks' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691859496/BioBasket/Main/Snacks_evfwvm.jpg"
                        className={classes.mainImage}
                    ></img>
                    Snacks
                </Link>
                <Link to='/vegetables' className={classes.items}>
                    <img 
                        src="https://res.cloudinary.com/ddorziaef/image/upload/v1691858581/BioBasket/Main/Vegetables_dcvpzk.avif"
                        className={classes.mainImage}
                    ></img>
                    Vegetables
                </Link>
            </div>
        </div>
    )
}

export default Main