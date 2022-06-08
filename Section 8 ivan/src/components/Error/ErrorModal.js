import React from "react";
import Button from "../UI/Button";
import classes from "./Error.module.css";


const ErrorModal = (props) => {

const errorHandler = () => {
    props.handleError();
}
    return(<div>
        <div className={classes.backdrop} onClick={errorHandler}></div>
        <div className={classes.modal}>
            <div className={classes.header}>
                <h2>Invalid input</h2>
            </div>
            <div className={classes.content}>
                {props.message}
                <div className="actions">
                <Button click={errorHandler}>Ok</Button>
                </div>
            </div>
        </div>
    </div>)
}


export default ErrorModal;