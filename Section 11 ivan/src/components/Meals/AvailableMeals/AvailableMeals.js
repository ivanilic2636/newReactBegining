import React from 'react'
import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  return (
      <div className={classes.meals}>
    <ul>{props.meals.map(meal => (
        <li>{meal.name}</li>
    ))}</ul>
    </div>
  )
}

export default AvailableMeals