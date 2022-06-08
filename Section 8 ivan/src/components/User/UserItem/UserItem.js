import React from "react";

const UserItem = (props) => {

    
    return(<li>{props.item.username} {props.item.age}</li>)
}

export default UserItem;