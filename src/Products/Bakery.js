import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const Bakery = () => {
    const bakeryItems = [

    ]
    const bakeryItemsNames = [

    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Bakery Items</h1>
            <Product imageIds={bakeryItems} title={bakeryItemsNames}/>
        </div>
    )
}

export default Bakery