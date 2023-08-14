import React from "react";
import classes from './Product.module.css'
import Product from "./Product";

const Vegetables = () => {
    const vegetables = [
        'v1690897995/BioBasket/Vegetables/Babycorn_nzd4uz',
        'v1690897995/BioBasket/Vegetables/Beans_cluster_iw1hsh',
        'v1690897995/BioBasket/Vegetables/Beetroot_jsju0o',
        'v1690897995/BioBasket/Vegetables/Bittergourd_vmdezy',
        'v1690897995/BioBasket/Vegetables/Bottlegourd_phj1xe',
        'v1690897995/BioBasket/Vegetables/Brinjal_nysqtq',
        'v1690897995/BioBasket/Vegetables/Cabbage_chrrau',
        'v1690897995/BioBasket/Vegetables/Capsicum-green_aosxvo',
        'v1690897995/BioBasket/Vegetables/Capsicum-red_atlphb',
        'v1690897995/BioBasket/Vegetables/Capsicum-yellow_cd7pku',
        'v1690897995/BioBasket/Vegetables/Carrot_k97xjp',
        'v1690897995/BioBasket/Vegetables/Cauliflower_pkkgka',
        'v1690897995/BioBasket/Vegetables/Colocasia_rqojib',
        'v1690897995/BioBasket/Vegetables/Corn_pukwyk',
        'v1690897995/BioBasket/Vegetables/Cucumber_fgyifl',
        'v1690897995/BioBasket/Vegetables/Drumsticks_dgmbmo',
        'v1690897995/BioBasket/Vegetables/Fresh_Turmeric_yd00jx',
        'v1690897995/BioBasket/Vegetables/Garlic_tuhvlu',
        'v1690897995/BioBasket/Vegetables/Ginger_was5hu',
        'v1690897995/BioBasket/Vegetables/Gooseberry_qznyia',
        'v1690897995/BioBasket/Vegetables/Greenchilli_ddutvi',
        'v1690897995/BioBasket/Vegetables/Greenpeas_wrurad',
        'v1690897995/BioBasket/Vegetables/Jackfruit_obwrnz',
        'v1690897995/BioBasket/Vegetables/Ladiesfinger_p7yqwh',
        'v1690897995/BioBasket/Vegetables/Mushroom_nrqom0',
        'v1690897995/BioBasket/Vegetables/Onion_ypwrxf',
        'v1690897995/BioBasket/Vegetables/Potato_z83dyc',
        'v1690897995/BioBasket/Vegetables/Pumpkin_luqinv',
        'v1690897995/BioBasket/Vegetables/Radish_vfzrhu',
        'v1690897995/BioBasket/Vegetables/Ridgegourd_w10uhk',
        'v1690897995/BioBasket/Vegetables/Sweetpotato_g5wsmk',
        'v1690897995/BioBasket/Vegetables/Tomato_pffz3r'
    ]
    const vegetablesNames = [
        'Baby Corn','Beans Cluster','Beetroot','Bitter Gourd','Bottle Gourd',
        'Brinjal','Cabbage','Capsicum Green','Capsicum Red','Capsicum Yellow',
        'Carrot','Cauliflower','Colocasia','Corn','Cucumber','Garlic','Ginger',
        'Gooseberry','Green Chilli','Green Peas','Jack Fruit','Ladies Finger',
        'Mushroom','Onion','Potato','Pumpkin','Radish','Ridge Gourd',
        'Sweet Potato','Tomato'
    ]
    return(
        <div className={classes.vegWrapper}>
            <h1 className={classes.heading}>Vegetables</h1>
            <Product imageIds={vegetables} title={vegetablesNames}/>
        </div>
    )
}

export default Vegetables