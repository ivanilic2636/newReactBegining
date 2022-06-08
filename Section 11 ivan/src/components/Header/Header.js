import React from 'react'
import classes from './Header.module.css';
import Meal from '../../images/meals.jpg'


function Header() {
  return (
    <div>
        <div className={classes.mainImage}><img src={Meal} alt=""/></div>
        <div className={classes.header}><h1>ReactMeals</h1></div>
    </div>
  )
}

export default Header