import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const Pickles = () => {
    const pickles = [
        'v1692196929/BioBasket/Pickles/Carrot_pickle_v2os43',
        'v1692196929/BioBasket/Pickles/Cauliflower_pickle_p8cbd6',
        'v1692196929/BioBasket/Pickles/Ginger_garlic_paste_bxrokq',
        'v1692196929/BioBasket/Pickles/Ginger_pickle_lp6nnt',
        'v1692196929/BioBasket/Pickles/Gongura_pickle_uydvtl',
        'v1692196929/BioBasket/Pickles/Lemon_pickle_tgwso2',
        'v1692196929/BioBasket/Pickles/Mango_pickle_mhbpyx',
        'v1692196929/BioBasket/Pickles/Redchilli_pickle_xwbvub',
        'v1692196929/BioBasket/Pickles/Tamarind_paste_mkwq4w',
        'v1692196929/BioBasket/Pickles/Tomato_pickle_ztduqz'
    ]
    const picklesNames = [
        'Carrot Pickle','Cauliflower Pickle','Ginger-Garlic Paste',
        'Ginger Pickle','Gongura Pickle','Lemon Pickle','Mango Pickle',
        'Redchilli Pickle','Tamarind Paste','Tomato Pickle'
    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Pickles</h1>
            <Product imageIds={pickles} title={picklesNames}/>
        </div>
    )
}

export default Pickles