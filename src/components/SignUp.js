import React from "react";
import { Link } from "react-router-dom";
import classes from './SignUp.module.css'

const SignUp = () => {
    return(
        <div className={classes.signup}>
            <div>
                <h2>Hello User</h2>
                <h3>Signup for fresh organic products</h3>
            </div>
            <div>
                Already have an account? <Link to='/main' className="link2">Sign in</Link>
            </div>
            <form className={classes.signupForm}>
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="text"
                    placeholder="Surname"
                />
                <input
                    type="email"
                    placeholder="Email"
                />
                <input
                    type="text"
                    placeholder="Mobile Number"
                />
                <input
                    type="text"
                    placeholder="Alternate Mobile Number"
                />
                <input
                    type="text"
                    placeholder="House No"
                />
                <input
                    type="text"
                    placeholder="Society/Address"
                />
                <input
                    type="text"
                    placeholder="Landmark"
                />
                <input
                    type="text"
                    placeholder="pincode"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="password"
                    placeholder="Password Confirm"
                />
            </form>
            <div className={classes.checkbox}>
                <input type="checkbox"/>
                <p>
                    I have read and agree to the  
                    <Link
                        to='/terms&conditions'
                        className='link1'
                    > Terms & Conditions</Link>
                </p>
            </div>
            <div className={classes.shopNow}>
                <button className="btn1">Shop Now</button>
            </div>
        </div>
    )
}
export default SignUp