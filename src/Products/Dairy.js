import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const Dairy = () => {
    const dairy = [
        'v1692192114/BioBasket/Dairy/Blueberry_yogurt_dp6zn4',
        'v1692192114/BioBasket/Dairy/Brown_Eggs_b2gnvn',
        'v1692192114/BioBasket/Dairy/Butter_koqmnt',
        'v1692192114/BioBasket/Dairy/Cheese_hftfq4',
        'v1692192114/BioBasket/Dairy/Cheese_slices_nvpuwf',
        'v1692192114/BioBasket/Dairy/Ghee_vuhttw',
        'v1692192114/BioBasket/Dairy/Milk_iu8eup',
        'v1692192114/BioBasket/Dairy/Paneer_bdmf7n',
        'v1692192114/BioBasket/Dairy/Strawberry_yogurt_wvlhlt',
        'v1692192114/BioBasket/Dairy/White_Eggs_tcyqbk',
        'v1692192114/BioBasket/Dairy/Yogurt_ghdxqf',
    ]
    const dairyNames = [
        'Blueberry Yogurt','Brown Eggs','Butter','Cheese','Cheese Slices',
        'Ghee','Milk','Paneer','Strawberry Yogurt','White Eggs','Plain Yogurt'
    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Dairy</h1>
            <Product imageIds={dairy} title={dairyNames}/>
        </div>
    )
}

export default Dairy