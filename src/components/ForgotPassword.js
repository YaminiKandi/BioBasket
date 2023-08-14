import React from "react";
import Header from "./Header";
import classes from './ForgotPassword.module.css'

const ForgotPassword = () => {
  return(
    <div>
      <Header></Header>
      <div className={classes.forgotPassword}>
        <h2>Password Reset</h2>
        <form className={classes.fpForm}>
          <input type="email" placeholder="Registered Email Address"></input>
          <button className="btn1">Reset</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword