import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const DryFruits = () => {
    const dryFruits = [

    ]
    const dryFruitsNames = [
        
    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>DryFruits & Nuts</h1>
            <Product imageIds={dryFruits} title={dryFruitsNames}/>
        </div>
    )
}

export default DryFruits