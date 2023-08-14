import React, { useState } from 'react';
import classes from './Counter.module.css'

const Counter = ({ initialValue, onChange }) => {
    const [count, setCount] = useState(initialValue || 0)
    const handleIncrement = () => {
        setCount(count + 1)
        if (onChange) {
            onChange(count + 1)
        }
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
            if (onChange) {
                onChange(count - 1)
            }
        }
    }
    
    return(
        <div className={classes.counterMain}>
            <div className={classes.counterDiv}>
                <button 
                    className="btn4" 
                    onClick={handleIncrement}
                >+</button>
                <div className={classes.value}>{count}</div>
                <button 
                    className="btn4" 
                    onClick={handleDecrement}
                >-</button>
                <img 
                    src='https://res.cloudinary.com/ddorziaef/image/upload/v1690801995/BioBasket/shopping-cart_hrcr1g.svg'
                    alt='Shopping Cart Icon'
                ></img>
            </div>
        </div>
    )
}

export default Counter