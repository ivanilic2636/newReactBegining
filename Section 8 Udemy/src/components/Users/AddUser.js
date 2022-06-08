import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const enteredUsernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const enteredAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
       
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length===0){
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age(non empty values)"
            })
            return;
        }
        if(+enteredAge < 0){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age(greater than 0)"
            })
            return;
        }
        console.log(enteredUsername + " " + enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge("");
        setEnteredUsername("");
    }


    const errorHandler = () => {
        setError(null);
    }

return(
    <div>
    {error && <ErrorModal title={error.title} content={error.message} onHandleError={errorHandler} />}
    <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={enteredUsernameHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={enteredAgeHandler} />
            <Button type="submit">Add User</Button>
        </form>
    </Card>
    </div>
)


}

export default AddUser;