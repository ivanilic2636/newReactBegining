import React, { useState } from "react";
import Button from "../../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {

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

    if(username.trim().length === 0 || age.trim().length === 0){
      let errorMsg = "Enter valid username and password";
      props.errorMsg(errorMsg);
    }
    else if(parseInt(age) <= 0){
      let errorMsg = "Enter valid age(above 0)";
      props.errorMsg(errorMsg);
    }
   
    else if(username.trim().length > 0 && age.trim().length > 0){
      const formData = {
        username: username,
        age: age,
        id: Math.random()
    }
      props.onAddUser(formData);
      setUsername("");
      setAge("")
    }
    
  
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
