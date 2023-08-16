import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const Fruits = () => {
    const fruits = [
        'v1690783863/BioBasket/Fruits/Apples_novpjt',
        'v1690783863/BioBasket/Fruits/Avacado_anerip',
        'v1690783863/BioBasket/Fruits/Banana_ouhlxu',
        'v1690783863/BioBasket/Fruits/Blackberry_dq6nbr',
        'v1690783863/BioBasket/Fruits/Cherry_pj34xn',
        'v1690783863/BioBasket/Fruits/Coconut_pg8lcy',
        'v1690783863/BioBasket/Fruits/Custardapple_prrsx0',
        'v1690783863/BioBasket/Fruits/DragonFruit_n4ke7c',
        'v1690783863/BioBasket/Fruits/Grapes_ehzhuw',
        'v1690783863/BioBasket/Fruits/Guava_fov8sb',
        'v1690783863/BioBasket/Fruits/Jamun_wyqzxc',
        'v1690783863/BioBasket/Fruits/Kiwi_ilref9',
        'v1690783863/BioBasket/Fruits/Mango_pjqafb',
        'v1690783863/BioBasket/Fruits/Mangosteen_l1nqvk',
        'v1690783863/BioBasket/Fruits/Muskmelon_m08mmw',
        'v1690783863/BioBasket/Fruits/Orange_sm1x4k',
        'v1690783863/BioBasket/Fruits/Papaya_dczgar',
        'v1690783863/BioBasket/Fruits/Passionfruit_digjhp',
        'v1690783863/BioBasket/Fruits/Pears_htkgsg',
        'v1690783863/BioBasket/Fruits/Pineapple_kpaxca',
        'v1690783863/BioBasket/Fruits/Plums_hmopjz',
        'v1690783863/BioBasket/Fruits/Pomegranate_b6anol',
        'v1690783863/BioBasket/Fruits/Rambutan_dxhns6',
        'v1690783863/BioBasket/Fruits/Strawberries_oepics',
        'v1690783863/BioBasket/Fruits/Sweetlime_p9azbn',
        'v1690783863/BioBasket/Fruits/Tamarillo_xziael'
    ]
    const fruitsNames = [
        'Apple', 'Avacado', 'Banana', 'Blackberry', 'Cherry',
        'Coconut', 'Custardapple', 'DragonFruit', 'Grapes', 
        'Guava', 'Jamun', 'Kiwi', 'Mango', 'Mangosteen',
        'Muskmelon', 'Orange', 'Papaya', 'Passionfruit',
        'Pears', 'Pineapple', 'Plums', 'Pomegranate', 'Rambutan',
        'Strawberries', 'Sweetlime', 'Tamarillo'
    ]
    return (
        <div>
            <div className={classes.wrapper}>
                <h1 className={classes.heading}>Fruits</h1>
                <Product imageIds={fruits} title={fruitsNames}/>
            </div>
        </div>
    )
}

export default Fruits