import React, { useState } from "react";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = () => {

const [username, setUsername] = useState("");
const [age, setAge] = useState("");

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChagneHandler = (event) => {
        setAge(event.target.value);
    }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
        username: username,
        age: age
    }
    console.log(formData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${classes.input}`}>
        <label>Username:</label>
        <input type="text" onChange={usernameChangeHandler} value={username}/>
        <label>Age (Years):</label>
        <input type="text" onChange={ageChagneHandler} value={age}/>
        <Button type="submit">Add User</Button>
      </div>
    </form>
  );
};

export default AddUser;
