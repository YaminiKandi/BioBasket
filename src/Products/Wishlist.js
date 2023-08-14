import React from "react";
import { getImageUrlFromId } from "../helpers/common";
import classes from './Product.module.css'

const Wishlist = ({ wishlist, imageIds, title }) => {
    return (
        <div>
            <h2>Wishlist</h2>
            <ul>
                {wishlist.map((isWished, index) => (
                    isWished && 
                    <div>
                        <img
                            src={getImageUrlFromId(imageIds[index])}
                            alt={`Wishlist Item ${index+1}`}
                            className={classes.wishlistImage}
                        />
                        <p> { title[index] } </p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Wishlist