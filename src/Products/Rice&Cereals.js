import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const RiceCereals = () => {
    const riceCereals = [

    ]
    const riceCerealsNames = [
        
    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Rice & Cereals</h1>
            <Product imageIds={riceCereals} title={riceCerealsNames}/>
        </div>
    )
}

export default RiceCereals