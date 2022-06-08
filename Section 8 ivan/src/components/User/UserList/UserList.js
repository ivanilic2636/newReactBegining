import React from "react";
import UserItem from "../UserItem/UserItem";
import classes from "./UserList.module.css";


const UserList = (props) => {

  
return (
    <div className={classes.users}>
        <ul>
           { props.users.map(user => (
                <UserItem  key={user.id} item={user} />
            ))}
        </ul>
    </div>
)

}

export default UserList;