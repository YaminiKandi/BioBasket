import React, { useState } from "react";
import { getImageUrlFromId } from '../helpers/common'
import classes from './Product.module.css'
import Counter from "./Counter";
import heart from '../assets/heart_outline.png'
import heartFilled from '../assets/heart_red.png'
import Wishlist from "./Wishlist";

const Product = ({ imageIds, title }) => {
    const [wishlist, setWishlist] = useState(new Array(imageIds.length).fill(false))
    const toggleWishlist = (index) => {
        const updatedWishlist = [...wishlist]
        updatedWishlist[index] = !updatedWishlist[index]
        setWishlist(updatedWishlist)
    }
    return(
        <div className={classes.product}>
            {imageIds.map((imageId, index) => (
                <div key={index} className={classes.items}>
                    <div className={classes.heartWrapper} onClick={() => toggleWishlist(index)}>
                        <button  className={classes.heartButton}>
                            <img src={wishlist[index] ? heartFilled : heart} alt='wishlist'  className={classes.heart} />
                        </button>
                    </div>
                    {/* eslint-disable-next-line */}
                    <img 
                        src={getImageUrlFromId(imageId)}
                        alt={`Product Image ${index + 1}`}
                        className={classes.image}
                    ></img>
                    <div className={classes.items}>
                        {title[index]}
                        <Counter></Counter>
                    </div>
                </div>
            ))}
            <Wishlist wishlist={wishlist} imageIds={imageIds} title={title}></Wishlist>
        </div>
    )
}

export default Product