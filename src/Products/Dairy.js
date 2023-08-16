import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const Dairy = () => {
    const dairy = [

    ]
    const dairyNames = [

    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Dairy</h1>
            <Product imageIds={dairy} title={dairyNames}/>
        </div>
    )
}

export default Dairy