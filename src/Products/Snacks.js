import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const Snacks = () => {
    const snacks = [

    ]
    const snacksNames = [
        'Jaggery Shells or Gavvalu'
    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Snacks</h1>
            <Product imageIds={snacks} title={snacksNames}/>
        </div>
    )
}

export default Snacks