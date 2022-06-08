import React from "react";

import classes from "./Input.module.css";

function Input(props) {
  return (
    <div
      className={`${classes.control} ${
        props.stateIsValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

export default Input;