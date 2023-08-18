import React from "react";
import Product from "./Product";
import classes from './Product.module.css'

const DryFruits = () => {
    const dryFruits = [
        'v1692343410/BioBasket/Dryfruits/Almonds_r0rgm5',
        'v1692343410/BioBasket/Dryfruits/Black_raisins_v8xif8',
        'v1692343410/BioBasket/Dryfruits/Brazilnuts_kgxhcb',
        'v1692343410/BioBasket/Dryfruits/Cashew_ocl2cu',
        'v1692343410/BioBasket/Dryfruits/Cornnuts_lwihhn',
        'v1692343410/BioBasket/Dryfruits/Dates_oukzlc',
        'v1692343410/BioBasket/Dryfruits/Dried_Apricot_yu8yzl',
        'v1692343410/BioBasket/Dryfruits/Dried_Figs_elawva',
        'v1692343410/BioBasket/Dryfruits/Hazelnut_pnabhj',
        'v1692343410/BioBasket/Dryfruits/Mixed_raisins_hf7qut',
        'v1692343410/BioBasket/Dryfruits/Peanuts_fsczhx',
        'v1692343410/BioBasket/Dryfruits/Pecans_upcxdf',
        'v1692343410/BioBasket/Dryfruits/Pilinuts_af0lzq',
        'v1692343410/BioBasket/Dryfruits/Pinenuts_xi9f5t',
        'v1692343410/BioBasket/Dryfruits/Pistachio_tdfq1e',
        'v1692343410/BioBasket/Dryfruits/Prune_nsv6ck',
        'v1692343410/BioBasket/Dryfruits/Walnut_asg082',
        'v1692343410/BioBasket/Dryfruits/Yellow_raisins_x19j16'
    ]
    const dryFruitsNames = [
        'Almonds','Black Raisins','Brazil Nuts','Cashew','Corn Nuts',
        'Dates','Dried Apricot','Dried Figs','Hazel Nut','Mixed Raisins',
        'Peanuts','Pecans','Pili Nuts','Pine Nuts','Pistachio','Prune',
        'Walnut','Yellow Raisins'
    ]
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>DryFruits & Nuts</h1>
            <Product imageIds={dryFruits} title={dryFruitsNames}/>
        </div>
    )
}

export default DryFruits