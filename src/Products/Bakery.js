import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const Bakery = () => {
    const bakeryItems = [
        'v1692187292/BioBasket/Bakery/Almond_biscuits_jshjpe',
        'v1692187292/BioBasket/Bakery/Blueberry_muffins_irnijq',
        'v1692187292/BioBasket/Bakery/Braided_bread_with_sesame_vbqivg',
        'v1692187292/BioBasket/Bakery/Bride_n_groom_cupcakes_viuwpw',
        'v1692187292/BioBasket/Bakery/Cheese_cake_sqfqcm',
        'v1692187292/BioBasket/Bakery/Chocolate_brownie_ihuomo',
        'v1692187292/BioBasket/Bakery/Chocolate_cake_a05ibc',
        'v1692187292/BioBasket/Bakery/Chocolate_cookies_fnl8qu',
        'v1692187292/BioBasket/Bakery/Chocolate_cupcakes_rqv5c3',
        'v1692187292/BioBasket/Bakery/Chocolate_hearts_meceir',
        'v1692187292/BioBasket/Bakery/Chocolate_muffins_ffnizk',
        'v1692187292/BioBasket/Bakery/Honey_cake_otryrj',
        'v1692187292/BioBasket/Bakery/Marble_cake_ktwqr5',
        'v1692187292/BioBasket/Bakery/Milk_bread_zz7ksj',
        'v1692187292/BioBasket/Bakery/Multigrain_bread_lr7zpb',
        'v1692187292/BioBasket/Bakery/Oats_cookies_ex7fze',
        'v1692187292/BioBasket/Bakery/Pastry_cookies_pbcmnx',
        'v1692187292/BioBasket/Bakery/Plain_muffins_cci0bh',
        'v1692187292/BioBasket/Bakery/Redvelvet_cupcakes_iwx6cq',
        'v1692187292/BioBasket/Bakery/Strawberry_cupcakes_tal4bi',
        'v1692187292/BioBasket/Bakery/Sugar_cookies_oyiyz0',
        'v1692187292/BioBasket/Bakery/Vanilla_cake_w0kll5',
        'v1692187292/BioBasket/Bakery/Wheat_bread_om7ubu',
    ]
    const bakeryItemsNames = [
        'Almond Biscuits','Blueberry Muffins','Braided bread with sesame',
        'Bride and groom Cupcakes','Cheese Cake','Chocolate Brownie',
        'Chocolate Cake','Chocolate Cookies','Chocolate Cupcakes',
        'Chocolate Hearts','Chocolate Muffins','Honey Cake','Marble Cake',
        'Milk Bread','Multigrain Bread','Oats Cookies','Pastry Cookies',
        'Plain Muffins','Redvelvet Cupcakes','Strawberry Cupcakes','Sugar Cookies',
        'Vanilla Cake','Wheat Bread'
    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Bakery Items</h1>
            <Product imageIds={bakeryItems} title={bakeryItemsNames}/>
        </div>
    )
}

export default Bakery