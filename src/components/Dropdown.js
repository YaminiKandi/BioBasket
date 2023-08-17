import React from "react";
import classes from './Dropdown.module.css'
import { Link } from "react-router-dom";

const Dropdown = () => {
  return(
    <div className={classes.dropdown}>
      <Link to='/bakery' className={classes.link}>Bakery</Link>
      <Link to='/dairy' className={classes.link}>Dairy</Link>
      <Link to='/dryfruitsnnuts' className={classes.link}>DryFruits & Nuts</Link>
      <Link to='/fruits' className={classes.link}>Fruits</Link>
      <Link to='/ricencereals' className={classes.link}>Rice & Cereals</Link>
      <Link to='/pickles' className={classes.link}>Pickles</Link>
      <Link to='/snacks' className={classes.link}>Snacks</Link>
      <Link to='/vegetables' className={classes.link}>Vegetables</Link>
    </div>
  )
}

export default Dropdown